// ================= ADMIN NUSARASA =================
const CFG = window.NUSARASA_CONFIG || {};
const db = CFG.supabaseUrl && CFG.supabaseKey && window.supabase
  ? window.supabase.createClient(CFG.supabaseUrl, CFG.supabaseKey)
  : null;
const DEMO = !db;

const $ = (s) => document.querySelector(s);
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
const rupiah = (n) => "Rp " + (n || 0).toLocaleString("id-ID");
const localDate = (d) => new Date(d).toLocaleDateString("en-CA"); // YYYY-MM-DD sesuai zona waktu perangkat
const todayStr = () => localDate(new Date());
const fmtDate = (s) => new Date(s + "T00:00:00").toLocaleDateString("id-ID", { weekday: "short", day: "numeric", month: "short", year: "numeric" });
const fmtTime = (ts) => new Date(ts).toLocaleString("id-ID", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" });

const STATUS = {
  reservations: { baru: "🆕 Baru", dikonfirmasi: "✅ Dikonfirmasi", selesai: "🏁 Selesai", dibatalkan: "❌ Dibatalkan" },
  orders: { baru: "🆕 Baru", diproses: "👨‍🍳 Diproses", siap: "🔔 Siap", selesai: "🏁 Selesai", dibatalkan: "❌ Dibatalkan" },
};

const state = { reservations: [], orders: [], tab: "reservations", search: "", status: "", date: "" };
let channel = null;

// ================= DATA =================
const DEMO_DATA = (() => {
  const t = todayStr();
  const tomorrow = localDate(Date.now() + 864e5);
  const ago = (min) => new Date(Date.now() - min * 6e4).toISOString();
  return {
    reservations: [
      { id: 3, created_at: ago(5), name: "Dimas Pratama", phone: "081234567890", date: t, time: "19:00", people: 4, table_area: "meja keluarga di area tengah", note: "Ulang tahun istri, minta lilin 🎂", status: "baru" },
      { id: 2, created_at: ago(90), name: "Sinta Maharani", phone: "085712345678", date: t, time: "12:00", people: 2, table_area: "meja dekat jendela", note: null, status: "dikonfirmasi" },
      { id: 1, created_at: ago(300), name: "Rizky Ananda", phone: "081398765432", date: tomorrow, time: "18:00", people: 8, table_area: "ruang privat lantai 2", note: "Acara kantor", status: "baru" },
    ],
    orders: [
      { id: 12, created_at: ago(3), name: "Ayu Lestari", phone: "081211112222", order_type: "dine-in", table_no: "7", note: "Sambal dipisah", items: [{ name: "Ayam Geprek Sambal Bawang", price: 38000, qty: 2 }, { name: "Es Kelapa Muda Jeruk", price: 22000, qty: 2 }], total: 120000, status: "baru" },
      { id: 11, created_at: ago(25), name: "Budi Santoso", phone: "081333334444", order_type: "takeaway", table_no: null, note: null, items: [{ name: "Nasi Rendang Padang", price: 58000, qty: 1 }, { name: "Es Teh Tarik Rempah", price: 18000, qty: 1 }], total: 76000, status: "diproses" },
      { id: 10, created_at: ago(70), name: "Citra Dewi", phone: "081255556666", order_type: "dine-in", table_no: "3", note: null, items: [{ name: "Soto Betawi", price: 45000, qty: 1 }, { name: "Klepon Lava", price: 20000, qty: 1 }], total: 65000, status: "selesai" },
    ],
  };
})();

async function loadAll() {
  if (DEMO) {
    state.reservations = DEMO_DATA.reservations;
    state.orders = DEMO_DATA.orders;
    return render();
  }
  const [r, o] = await Promise.all([
    db.from("reservations").select("*").order("created_at", { ascending: false }).limit(1000),
    db.from("orders").select("*").order("created_at", { ascending: false }).limit(1000),
  ]);
  if (r.error || o.error) toast("⚠️ Gagal memuat data: " + (r.error || o.error).message);
  state.reservations = r.data || [];
  state.orders = o.data || [];
  render();
}

async function updateStatus(table, id, status) {
  if (!DEMO) {
    const { error } = await db.from(table).update({ status }).eq("id", id);
    if (error) { toast("❌ Gagal mengubah status"); return loadAll(); }
  }
  const row = state[table].find((x) => x.id === id);
  if (row) row.status = status;
  render();
  toast("Status diperbarui ✓");
}

async function removeRow(table, id) {
  const row = state[table].find((x) => x.id === id);
  if (!row || !confirm(`Hapus data milik ${row.name}? Data yang dihapus tidak bisa dikembalikan.`)) return;
  if (!DEMO) {
    const { error } = await db.from(table).delete().eq("id", id);
    if (error) return toast("❌ Gagal menghapus");
  }
  state[table] = state[table].filter((x) => x.id !== id);
  render();
  toast("Data dihapus");
}

// Notifikasi langsung saat ada reservasi / pesanan baru
function subscribe() {
  if (DEMO || channel) return;
  channel = db.channel("admin-feed");
  for (const table of ["reservations", "orders"]) {
    channel.on("postgres_changes", { event: "*", schema: "public", table }, (p) => {
      if (p.eventType === "INSERT") {
        state[table].unshift(p.new);
        beep();
        toast(table === "reservations" ? `📅 Reservasi baru dari ${p.new.name}!` : `🛒 Pesanan baru dari ${p.new.name}!`);
        render(p.new.id, table);
      } else if (p.eventType === "UPDATE") {
        const i = state[table].findIndex((x) => x.id === p.new.id);
        if (i >= 0) state[table][i] = p.new;
        render();
      } else if (p.eventType === "DELETE") {
        state[table] = state[table].filter((x) => x.id !== p.old.id);
        render();
      }
    });
  }
  channel.subscribe((status) => $("#liveBadge").classList.toggle("off", status !== "SUBSCRIBED"));
}

// ================= TAMPILAN =================
function render(flashId, flashTable) {
  renderStats();
  renderInsight();
  renderList(flashId, flashTable);
}

function renderStats() {
  const t = todayStr();
  const resToday = state.reservations.filter((r) => r.date === t && r.status !== "dibatalkan");
  const resNew = state.reservations.filter((r) => r.status === "baru").length;
  const ordActive = state.orders.filter((o) => ["baru", "diproses", "siap"].includes(o.status)).length;
  const revenue = state.orders.filter((o) => localDate(o.created_at) === t && o.status !== "dibatalkan").reduce((a, o) => a + o.total, 0);
  const guests = resToday.reduce((a, r) => a + r.people, 0);
  $("#stats").innerHTML = `
    <div class="stat"><span>Reservasi hari ini</span><strong>${resToday.length}</strong><span>${guests} tamu</span></div>
    <div class="stat ${resNew ? "alert" : ""}"><span>Menunggu konfirmasi</span><strong>${resNew}</strong><span>reservasi baru</span></div>
    <div class="stat ${ordActive ? "alert" : ""}"><span>Pesanan aktif</span><strong>${ordActive}</strong><span>belum selesai</span></div>
    <div class="stat"><span>Pendapatan hari ini</span><strong>${rupiah(revenue)}</strong><span>dari pesanan online</span></div>`;
  const ordNew = state.orders.filter((o) => o.status === "baru").length;
  $("#countRes").textContent = resNew || "";
  $("#countOrd").textContent = ordNew || "";
  document.title = (resNew + ordNew ? `(${resNew + ordNew}) ` : "") + "Admin Nusarasa";
}

// Ringkasan otomatis dari data yang ada
function renderInsight() {
  const t = todayStr();
  const tips = [];
  const sold = {};
  state.orders.filter((o) => o.status !== "dibatalkan").forEach((o) => (o.items || []).forEach((it) => (sold[it.name] = (sold[it.name] || 0) + it.qty)));
  const top = Object.entries(sold).sort((a, b) => b[1] - a[1]).slice(0, 3);
  if (top.length) tips.push(`Menu terlaris: <b>${top.map(([n, q]) => `${esc(n)} (${q})`).join(", ")}</b>. Pastikan stok bahannya cukup.`);

  const resToday = state.reservations.filter((r) => r.date === t && r.status !== "dibatalkan");
  if (resToday.length) {
    const byHour = {};
    resToday.forEach((r) => (byHour[r.time] = (byHour[r.time] || 0) + r.people));
    const [peakTime, peakGuests] = Object.entries(byHour).sort((a, b) => b[1] - a[1])[0];
    tips.push(`Jam tersibuk hari ini dari reservasi: <b>pukul ${peakTime.replace(":", ".")}</b> dengan ${peakGuests} tamu. Siapkan staf tambahan.`);
  }
  const big = state.reservations.filter((r) => r.date >= t && r.people >= 7 && r.status !== "dibatalkan");
  if (big.length) tips.push(`Ada <b>${big.length} reservasi rombongan</b> (7+ orang) mendatang. Cek ketersediaan ruang privat.`);
  const pending = state.reservations.filter((r) => r.status === "baru").length;
  if (pending) tips.push(`<b>${pending} reservasi</b> belum dikonfirmasi. Hubungi tamu lewat tombol WhatsApp.`);
  const late = state.orders.filter((o) => ["baru", "diproses"].includes(o.status) && Date.now() - new Date(o.created_at) > 20 * 6e4).length;
  if (late) tips.push(`⚠️ <b>${late} pesanan</b> sudah lebih dari 20 menit dan belum siap.`);

  $("#insight").innerHTML = tips.length
    ? `🤖 <b>Ringkasan AI</b><ul>${tips.map((x) => `<li>${x}</li>`).join("")}</ul>`
    : `🤖 <b>Ringkasan AI</b> — belum ada data untuk dianalisis. Reservasi dan pesanan baru akan muncul otomatis di sini.`;
}

function renderStatusFilter() {
  $("#statusFilter").innerHTML = `<option value="">Semua status</option>` +
    Object.entries(STATUS[state.tab]).map(([v, l]) => `<option value="${v}">${l}</option>`).join("");
  $("#statusFilter").value = state.status;
}

function waLink(phone, text) {
  let p = String(phone || "").replace(/\D/g, "");
  if (p.startsWith("0")) p = "62" + p.slice(1);
  return `https://wa.me/${p}?text=${encodeURIComponent(text)}`;
}

function renderList(flashId, flashTable) {
  const table = state.tab;
  const q = state.search.toLowerCase();
  const rows = state[table].filter((x) =>
    (!state.status || x.status === state.status) &&
    (!state.date || (table === "reservations" ? x.date : localDate(x.created_at)) === state.date) &&
    (!q || `${x.name} ${x.phone}`.toLowerCase().includes(q))
  );
  if (table === "reservations") rows.sort((a, b) => (a.date + a.time).localeCompare(b.date + b.time));

  if (!rows.length) {
    $("#list").innerHTML = `<div class="empty-state"><div>${table === "reservations" ? "📅" : "🛒"}</div>Belum ada ${table === "reservations" ? "reservasi" : "pesanan"} yang cocok dengan filter.</div>`;
    return;
  }
  $("#list").innerHTML = rows.map((x) => {
    const options = Object.entries(STATUS[table]).map(([v, l]) => `<option value="${v}" ${v === x.status ? "selected" : ""}>${l}</option>`).join("");
    const flash = flashId === x.id && flashTable === table ? "flash" : "";
    if (table === "reservations") {
      const msg = `Halo ${x.name}, reservasi Anda di Nusarasa untuk ${fmtDate(x.date)} pukul ${x.time.replace(":", ".")} (${x.people} orang) telah kami KONFIRMASI. Sampai jumpa! 🙏`;
      return `
      <article class="item s-${x.status} ${flash}">
        <div class="item-head"><h3>${esc(x.name)}</h3><small>masuk ${fmtTime(x.created_at)}</small></div>
        <div class="chips-row">
          <span>📅 ${fmtDate(x.date)}</span><span>🕒 ${esc(x.time).replace(":", ".")}</span>
          <span>👥 ${x.people} orang</span>${x.table_area ? `<span>🪑 ${esc(x.table_area)}</span>` : ""}
          <span>📞 ${esc(x.phone)}</span>
        </div>
        ${x.note ? `<div class="note">📝 ${esc(x.note)}</div>` : ""}
        <div class="item-actions">
          <select class="status-select" onchange="updateStatus('reservations', ${x.id}, this.value)">${options}</select>
          <a class="btn-ghost wa" href="${waLink(x.phone, msg)}" target="_blank" rel="noopener">WhatsApp</a>
          <button class="btn-ghost danger" onclick="removeRow('reservations', ${x.id})" title="Hapus">🗑</button>
        </div>
      </article>`;
    }
    const msg = `Halo ${x.name}, pesanan Anda #${x.id} di Nusarasa (${rupiah(x.total)}) ${x.status === "siap" ? "sudah SIAP" + (x.order_type === "takeaway" ? " untuk diambil" : " dan segera diantar ke meja") : "sedang kami proses"}. Terima kasih! 🙏`;
    return `
      <article class="item s-${x.status} ${flash}">
        <div class="item-head"><h3>#${x.id} · ${esc(x.name)}</h3><small>${fmtTime(x.created_at)}</small></div>
        <div class="chips-row">
          <span>${x.order_type === "takeaway" ? "🛍️ Bawa pulang" : "🍽️ Makan di tempat"}</span>
          ${x.table_no ? `<span>🪑 Meja ${esc(x.table_no)}</span>` : ""}
          ${x.phone ? `<span>📞 ${esc(x.phone)}</span>` : ""}
        </div>
        <div class="order-items">
          ${(x.items || []).map((it) => `<div><span>${it.qty}× ${esc(it.name)}</span><span>${rupiah(it.price * it.qty)}</span></div>`).join("")}
          <div class="tot"><span>Total</span><span>${rupiah(x.total)}</span></div>
        </div>
        ${x.note ? `<div class="note">📝 ${esc(x.note)}</div>` : ""}
        <div class="item-actions">
          <select class="status-select" onchange="updateStatus('orders', ${x.id}, this.value)">${options}</select>
          ${x.phone ? `<a class="btn-ghost wa" href="${waLink(x.phone, msg)}" target="_blank" rel="noopener">WhatsApp</a>` : ""}
          <button class="btn-ghost danger" onclick="removeRow('orders', ${x.id})" title="Hapus">🗑</button>
        </div>
      </article>`;
  }).join("");
}

// ================= LOGIN =================
function showLogin(message = "") {
  $("#dashView").hidden = true;
  $("#loginView").hidden = false;
  $("#loginMsg").textContent = message;
}

async function showDashboard(email) {
  $("#loginView").hidden = true;
  $("#dashView").hidden = false;
  $("#demoBanner").hidden = !DEMO;
  if (DEMO) { $("#liveBadge").textContent = "● Demo"; $("#liveBadge").classList.add("off"); }
  $("#userEmail").textContent = email;
  renderStatusFilter();
  await loadAll();
  subscribe();
}

async function enter(user) {
  const { data: isAdmin, error } = await db.rpc("is_admin");
  if (error || !isAdmin) {
    await db.auth.signOut();
    return showLogin("Akun ini belum terdaftar sebagai admin. Tambahkan emailnya ke tabel 'admins' di Supabase.");
  }
  showDashboard(user.email);
}

$("#loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const btn = $("#loginBtn");
  btn.disabled = true;
  btn.textContent = "Memeriksa...";
  $("#loginMsg").textContent = "";
  const { data, error } = await db.auth.signInWithPassword({ email: $("#loginEmail").value.trim(), password: $("#loginPass").value });
  btn.disabled = false;
  btn.textContent = "Masuk";
  if (error) return showLogin("Email atau kata sandi salah.");
  enter(data.user);
});

$("#logoutBtn").addEventListener("click", async () => {
  if (DEMO) return toast("Mode demo tidak memakai login");
  if (channel) { await db.removeChannel(channel); channel = null; }
  await db.auth.signOut();
  showLogin();
});

// ================= KONTROL =================
document.querySelectorAll(".tab").forEach((b) => b.addEventListener("click", () => {
  document.querySelectorAll(".tab").forEach((x) => x.classList.remove("active"));
  b.classList.add("active");
  state.tab = b.dataset.tab;
  state.status = "";
  renderStatusFilter();
  renderList();
}));
$("#search").addEventListener("input", (e) => { state.search = e.target.value; renderList(); });
$("#statusFilter").addEventListener("change", (e) => { state.status = e.target.value; renderList(); });
$("#dateFilter").addEventListener("change", (e) => { state.date = e.target.value; renderList(); });
$("#todayBtn").addEventListener("click", () => { state.date = $("#dateFilter").value = todayStr(); renderList(); });
$("#allBtn").addEventListener("click", () => { state.date = $("#dateFilter").value = ""; state.status = ""; state.search = $("#search").value = ""; renderStatusFilter(); renderList(); });
$("#refreshBtn").addEventListener("click", () => loadAll().then(() => toast("Data diperbarui ✓")));
setInterval(() => renderInsight(), 60000); // perbarui peringatan pesanan terlambat

// ================= UTIL =================
let toastTimer;
function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 3000);
}

function beep() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    [880, 1175].forEach((f, i) => {
      const o = ctx.createOscillator(), g = ctx.createGain();
      o.frequency.value = f;
      g.gain.setValueAtTime(0.15, ctx.currentTime + i * 0.18);
      g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.18 + 0.25);
      o.connect(g).connect(ctx.destination);
      o.start(ctx.currentTime + i * 0.18);
      o.stop(ctx.currentTime + i * 0.18 + 0.3);
    });
  } catch {}
}

window.updateStatus = updateStatus;
window.removeRow = removeRow;

// ================= MULAI =================
(async function boot() {
  if (DEMO) return showDashboard("mode demo");
  const { data: { session } } = await db.auth.getSession();
  if (session) enter(session.user);
  else showLogin();
})();
