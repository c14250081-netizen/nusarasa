// ================= DATA MENU =================
const MENU = [
  { id: 1, name: "Nasi Rendang Padang", emoji: "🍛", img: "Nasi Padang With beef rendang.jpg", cat: "makanan", price: 58000, pedas: 3, kal: 650, protein: 32, porsi: "berat", veg: false, tags: ["gurih", "berat", "daging", "hangat"], desc: "Rendang sapi dimasak 8 jam dengan 21 rempah, disajikan dengan nasi pulen.", bg: "#5a2e1a" },
  { id: 2, name: "Sate Ayam Madura", emoji: "🍢", img: "Sate ayam madura.jpg", cat: "makanan", price: 42000, pedas: 1, kal: 480, protein: 35, porsi: "sedang", veg: false, tags: ["gurih", "manis", "ayam", "bakar"], desc: "10 tusuk sate ayam dengan bumbu kacang kental dan lontong.", bg: "#6b3a1e" },
  { id: 3, name: "Gado-Gado Jakarta", emoji: "🥗", img: "Gado-gado in Jakarta.JPG", cat: "makanan", price: 35000, pedas: 1, kal: 420, protein: 18, porsi: "sedang", veg: true, tags: ["sayur", "segar", "sehat", "kacang"], desc: "Sayuran rebus segar, tahu, tempe, telur dengan saus kacang khas Betawi.", bg: "#2f5a2a" },
  { id: 4, name: "Ayam Geprek Sambal Bawang", emoji: "🍗", img: "Ayam geprek pedas.jpg", cat: "makanan", price: 38000, pedas: 5, kal: 610, protein: 30, porsi: "berat", veg: false, tags: ["pedas", "ayam", "renyah", "berat"], desc: "Ayam crispy digeprek dengan sambal bawang level 'nangis'. Untuk pecinta pedas sejati!", bg: "#7a1f1f" },
  { id: 5, name: "Soto Betawi", emoji: "🍲", img: "Soto Betawi (brighter).jpg", cat: "makanan", price: 45000, pedas: 1, kal: 520, protein: 28, porsi: "sedang", veg: false, tags: ["hangat", "kuah", "gurih", "comfort"], desc: "Kuah santan susu yang creamy dengan daging sapi empuk. Penghangat hati.", bg: "#6e5124" },
  { id: 6, name: "Nasi Goreng Kampung", emoji: "🍳", img: "Nasi Goreng Kampung.jpg", cat: "makanan", price: 32000, pedas: 2, kal: 580, protein: 20, porsi: "berat", veg: false, tags: ["gurih", "berat", "murah", "hangat"], desc: "Nasi goreng terasi dengan telur ceplok, kerupuk, dan acar.", bg: "#7a4b1a" },
  { id: 7, name: "Tahu Tempe Penyet Vegan", emoji: "🌱", img: "Sambal tempe penyet kemangi.JPG", cat: "makanan", price: 28000, pedas: 4, kal: 390, protein: 22, porsi: "sedang", veg: true, tags: ["pedas", "sayur", "murah", "sehat"], desc: "Tahu & tempe goreng dengan sambal korek, lalapan, dan nasi merah.", bg: "#3d5a1f" },
  { id: 8, name: "Iga Bakar Madu", emoji: "🍖", img: "Iga Bakar dan Nasi Bakar.jpg", cat: "makanan", price: 95000, pedas: 2, kal: 780, protein: 45, porsi: "berat", veg: false, tags: ["manis", "bakar", "daging", "premium", "berat"], desc: "Iga sapi premium dibakar dengan glaze madu dan kecap, empuk lepas dari tulang.", bg: "#5c2a14" },
  { id: 9, name: "Pisang Goreng Keju", emoji: "🍌", img: "Pisang keju.jpg", cat: "camilan", price: 22000, pedas: 0, kal: 340, protein: 6, porsi: "ringan", veg: true, tags: ["manis", "renyah", "murah", "camilan"], desc: "Pisang kepok goreng renyah dengan keju parut dan susu kental manis.", bg: "#7a6a1a" },
  { id: 10, name: "Tahu Crispy Cabe Garam", emoji: "🧈", img: "Tahu goreng crispy.jpg", cat: "camilan", price: 20000, pedas: 3, kal: 280, protein: 12, porsi: "ringan", veg: true, tags: ["pedas", "renyah", "murah", "gurih"], desc: "Tahu sutra digoreng crispy, ditumis cabai, bawang putih, dan garam.", bg: "#6b4a1e" },
  { id: 11, name: "Lumpia Semarang", emoji: "🌯", img: "Lumpia Semarang.jpg", cat: "camilan", price: 25000, pedas: 0, kal: 300, protein: 14, porsi: "ringan", veg: false, tags: ["gurih", "renyah", "camilan"], desc: "Lumpia isi rebung dan udang dengan saus tauco manis.", bg: "#6b5530" },
  { id: 12, name: "Es Teh Tarik Rempah", emoji: "🧋", img: "Teh Tarik.jpg", cat: "minuman", price: 18000, pedas: 0, kal: 180, protein: 3, porsi: "ringan", veg: true, tags: ["manis", "segar", "dingin", "murah"], desc: "Teh tarik dengan sentuhan kayu manis dan kapulaga.", bg: "#6b4a2e" },
  { id: 13, name: "Es Kelapa Muda Jeruk", emoji: "🥥", img: "Es Kelapa Muda.JPG", cat: "minuman", price: 22000, pedas: 0, kal: 120, protein: 1, porsi: "ringan", veg: true, tags: ["segar", "dingin", "sehat"], desc: "Kelapa muda segar dengan perasan jeruk nipis. Penetral pedas terbaik!", bg: "#2a5a52" },
  { id: 14, name: "Wedang Jahe Serai", emoji: "🍵", img: "Wedang Jahe.jpg", cat: "minuman", price: 16000, pedas: 1, kal: 90, protein: 0, porsi: "ringan", veg: true, tags: ["hangat", "sehat", "comfort", "murah"], desc: "Jahe merah bakar dan serai, menghangatkan tubuh yang lelah.", bg: "#5a4a1a" },
  { id: 15, name: "Kopi Susu Gula Aren", emoji: "☕", img: "Es Kopi Susu Gula Aren.jpg", cat: "minuman", price: 24000, pedas: 0, kal: 210, protein: 5, porsi: "ringan", veg: true, tags: ["manis", "kopi", "semangat", "dingin"], desc: "Espresso robusta Temanggung, susu segar, dan gula aren asli.", bg: "#3d2a1a" },
  { id: 16, name: "Es Cendol Durian", emoji: "🍧", img: "Es Cendol Durian.jpg", cat: "dessert", price: 28000, pedas: 0, kal: 380, protein: 4, porsi: "ringan", veg: true, tags: ["manis", "dingin", "segar", "comfort"], desc: "Cendol pandan, santan, gula merah, dan daging durian Medan.", bg: "#3d5a2a" },
  { id: 17, name: "Klepon Lava", emoji: "🟢", img: "Klepon Khas Tulungagung.jpg", cat: "dessert", price: 20000, pedas: 0, kal: 260, protein: 3, porsi: "ringan", veg: true, tags: ["manis", "comfort", "murah"], desc: "Klepon dengan isian gula aren cair yang lumer, taburan kelapa parut.", bg: "#2a5a2a" },
  { id: 18, name: "Martabak Manis Mini", emoji: "🥞", img: "Terang bulan keju.jpg", cat: "dessert", price: 32000, pedas: 0, kal: 450, protein: 8, porsi: "sedang", veg: true, tags: ["manis", "comfort", "berat"], desc: "Martabak manis isi cokelat, keju, dan kacang. Mood booster dijamin!", bg: "#5a3a1a" },
];

const AI_PICKS = [1, 4, 13, 16]; // ditandai "AI Pick" (paling sering direkomendasikan)
const rupiah = (n) => "Rp " + n.toLocaleString("id-ID");

// Foto menu: nama file dari Wikimedia Commons (lisensi bebas), atau path lokal seperti "images/rendang.jpg"
// untuk foto milik sendiri. Kalau foto gagal dimuat, emoji tetap tampil sebagai cadangan.
const photo = (m, w = 640) =>
  /^(images\/|https?:)/.test(m.img) ? m.img : `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(m.img)}?width=${w}`;
const photoTag = (m, w) => `<img src="${photo(m, w)}" alt="${m.name}" loading="lazy" onerror="this.remove()" />`;
const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

// ================= NAVBAR =================
window.addEventListener("scroll", () => $("#navbar").classList.toggle("scrolled", window.scrollY > 40));
$("#hamburger").addEventListener("click", () => $("#navLinks").classList.toggle("open"));
$$("#navLinks a").forEach((a) => a.addEventListener("click", () => $("#navLinks").classList.remove("open")));

// ================= COUNTER HERO =================
const counterObs = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (!e.isIntersecting) return;
    const el = e.target, target = +el.dataset.count;
    let cur = 0;
    const step = Math.ceil(target / 60);
    const t = setInterval(() => {
      cur = Math.min(cur + step, target);
      el.textContent = cur.toLocaleString("id-ID") + (target > 1000 ? "+" : "");
      if (cur >= target) clearInterval(t);
    }, 25);
    counterObs.unobserve(el);
  });
});
$$("[data-count]").forEach((el) => counterObs.observe(el));

// ================= MENU =================
let activeCat = "semua";

// "Pencarian pintar": memahami kata kunci natural seperti "yang pedas", "murah", "sayur"
function smartMatch(item, q) {
  if (!q) return true;
  const words = q.toLowerCase().replace(/yang|mau|ingin|pengen|dong|aja/g, "").split(/\s+/).filter(Boolean);
  return words.every((w) => {
    if (w.includes("pedas")) return item.pedas >= 3;
    if (w.includes("murah") || w.includes("hemat")) return item.price <= 30000;
    if (w.includes("vegan") || w.includes("vegetarian") || w.includes("sayur")) return item.veg;
    if (w.includes("sehat") || w.includes("diet")) return item.kal <= 420;
    const hay = (item.name + " " + item.desc + " " + item.tags.join(" ") + " " + item.cat).toLowerCase();
    return hay.includes(w);
  });
}

function renderMenu() {
  const q = $("#menuSearch").value.trim();
  const items = MENU.filter((m) => (activeCat === "semua" || m.cat === activeCat) && smartMatch(m, q));
  $("#menuGrid").innerHTML = items.length
    ? items.map((m, i) => `
      <article class="menu-card" style="animation-delay:${i * 0.04}s">
        <div class="menu-img" style="background:radial-gradient(circle, ${m.bg}, #1a1612)">
          ${m.emoji}${photoTag(m)}
          ${m.veg ? '<span class="menu-tag">🌱 Vegetarian</span>' : ""}
          ${AI_PICKS.includes(m.id) ? '<span class="menu-tag ai">🤖 AI Pick</span>' : ""}
        </div>
        <div class="menu-info">
          <h3>${m.name}</h3>
          <p>${m.desc}</p>
          <div class="menu-meta">
            <span>🔥 ${m.kal} kkal</span>
            <span>${m.pedas ? "🌶️".repeat(m.pedas) : "Tidak pedas"}</span>
          </div>
          <div class="menu-bottom">
            <span class="price">${rupiah(m.price)}</span>
            <button class="add-btn" onclick="addToCart(${m.id})" aria-label="Tambah">+</button>
          </div>
        </div>
      </article>`).join("")
    : `<p class="empty">🤔 AI tidak menemukan menu yang cocok. Coba kata kunci lain, misalnya "manis" atau "ayam".</p>`;
}

$("#filters").addEventListener("click", (e) => {
  if (!e.target.matches(".filter")) return;
  $$(".filter").forEach((f) => f.classList.remove("active"));
  e.target.classList.add("active");
  activeCat = e.target.dataset.cat;
  renderMenu();
});
$("#menuSearch").addEventListener("input", renderMenu);
renderMenu();

// ================= AI REKOMENDASI =================
const prefs = { mood: null, lapar: null };
$$(".chips").forEach((group) => {
  group.addEventListener("click", (e) => {
    const chip = e.target.closest(".chip");
    if (!chip) return;
    group.querySelectorAll(".chip").forEach((c) => c.classList.remove("active"));
    chip.classList.add("active");
    prefs[group.dataset.name] = chip.dataset.value;
  });
});
$("#pedas").addEventListener("input", (e) => ($("#pedasVal").textContent = e.target.value));
$("#budget").addEventListener("input", (e) => ($("#budgetVal").textContent = rupiah(+e.target.value)));

// Model skoring sederhana: tiap menu diberi skor berdasarkan kecocokan dengan preferensi
function scoreItem(m, p) {
  let s = 50;
  const moodTags = {
    senang: ["manis", "bakar", "segar"],
    capek: ["hangat", "comfort", "kopi", "kuah"],
    sedih: ["comfort", "manis", "hangat"],
    semangat: ["pedas", "berat", "kopi", "semangat"],
  };
  if (p.mood) s += m.tags.filter((t) => moodTags[p.mood].includes(t)).length * 12;
  if (p.lapar) {
    if (p.lapar === m.porsi) s += 18;
    else if (p.lapar === "berat" && m.porsi === "ringan") s -= 15;
    else if (p.lapar === "ringan" && m.porsi === "berat") s -= 20;
  }
  s -= Math.abs(m.pedas - p.pedas) * 7;
  if (m.price > p.budget) s -= 40;
  if (p.veg && !m.veg) s = -999;
  return Math.max(0, Math.min(99, s + Math.random() * 6));
}

const moodText = {
  senang: "Mood kamu sedang bagus — saatnya merayakan dengan sesuatu yang lezat!",
  capek: "Kamu terlihat lelah. AI memilihkan makanan hangat yang menenangkan.",
  sedih: "Peluk virtual dulu 🤗. Comfort food dan yang manis-manis bisa bantu memperbaiki mood.",
  semangat: "Energi kamu tinggi! Ini pilihan yang berani dan mengenyangkan.",
};

$("#aiForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const p = { ...prefs, pedas: +$("#pedas").value, budget: +$("#budget").value, veg: $("#vegetarian").checked };
  const box = $("#aiResult");
  const steps = ["Membaca preferensi rasa...", "Menganalisis mood & tingkat lapar...", "Menghitung kecocokan 18 menu...", "Menyusun kombinasi terbaik..."];
  box.innerHTML = `<div class="ai-loading"><div class="spinner"></div><div class="steps">${steps.map((s) => `<p>${s}</p>`).join("")}</div></div>`;
  const stepEls = box.querySelectorAll(".steps p");
  for (const el of stepEls) { await wait(450); el.classList.add("done"); el.textContent = "✓ " + el.textContent; }
  await wait(300);

  const scored = MENU.map((m) => ({ ...m, score: scoreItem(m, p) })).filter((m) => m.score > 0);
  const mains = scored.filter((m) => m.cat === "makanan" || m.cat === "camilan").sort((a, b) => b.score - a.score);
  const drinks = scored.filter((m) => m.cat === "minuman").sort((a, b) => b.score - a.score);
  const desserts = scored.filter((m) => m.cat === "dessert").sort((a, b) => b.score - a.score);
  const picks = [mains[0], mains[1], drinks[0], desserts[0]].filter(Boolean);

  if (!picks.length) {
    box.innerHTML = `<div class="ai-placeholder"><div class="brain">😅</div><p>Tidak ada menu yang cocok dengan budget ini. Coba naikkan budget sedikit.</p></div>`;
    return;
  }
  const totalKal = picks.reduce((a, b) => a + b.kal, 0);
  const summary = (p.mood ? moodText[p.mood] : "Berdasarkan preferensimu, inilah racikan terbaik dari AI Chef.") +
    ` Estimasi total: <b>${totalKal} kkal</b>.`;

  box.innerHTML = `
    <div class="ai-summary">🤖 ${summary}</div>
    ${picks.map((m, i) => `
      <div class="rec-item" style="animation-delay:${i * 0.12}s">
        <div class="rec-emoji thumb">${m.emoji}${photoTag(m, 160)}</div>
        <div class="rec-body">
          <h4>${m.name}</h4>
          <small>${rupiah(m.price)} · ${m.kal} kkal · ${m.pedas ? "🌶️".repeat(m.pedas) : "tidak pedas"}</small>
          <div class="match"><span style="width:0" data-w="${Math.round(m.score)}"></span></div>
        </div>
        <div class="rec-score">${Math.round(m.score)}%<br/><button class="add-btn" onclick="addToCart(${m.id})">+</button></div>
      </div>`).join("")}
    <button class="btn btn-outline full" onclick="addAllRec([${picks.map((m) => m.id)}])">Tambahkan Semua ke Pesanan</button>`;
  requestAnimationFrame(() => box.querySelectorAll(".match span").forEach((s) => (s.style.width = s.dataset.w + "%")));
});

window.addAllRec = (ids) => { ids.forEach((id) => addToCart(id, true)); toast("✨ Semua rekomendasi AI masuk keranjang!"); };
const wait = (ms) => new Promise((r) => setTimeout(r, ms));

// ================= KERANJANG =================
const cart = {};
function addToCart(id, silent) {
  cart[id] = (cart[id] || 0) + 1;
  renderCart();
  if (!silent) toast(`✅ ${MENU.find((m) => m.id === id).name} ditambahkan`);
}
window.addToCart = addToCart;

function changeQty(id, d) {
  cart[id] += d;
  if (cart[id] <= 0) delete cart[id];
  renderCart();
}
window.changeQty = changeQty;

function renderCart() {
  const ids = Object.keys(cart).map(Number);
  const items = ids.map((id) => ({ ...MENU.find((m) => m.id === id), qty: cart[id] }));
  $("#cartCount").textContent = items.reduce((a, b) => a + b.qty, 0);
  $("#cartTotal").textContent = rupiah(items.reduce((a, b) => a + b.price * b.qty, 0));
  $("#cartItems").innerHTML = items.length
    ? items.map((m) => `
      <div class="cart-item">
        <span class="e thumb">${m.emoji}${photoTag(m, 160)}</span>
        <div class="info">${m.name}<br/><small>${rupiah(m.price)}</small></div>
        <div class="qty"><button onclick="changeQty(${m.id},-1)">−</button>${m.qty}<button onclick="changeQty(${m.id},1)">+</button></div>
      </div>`).join("")
    : `<p class="empty">Keranjang masih kosong.<br/>Yuk pilih menu atau minta saran AI Chef! 🍽️</p>`;

  // Analisis AI untuk isi keranjang: nutrisi + saran pairing
  if (!items.length) { $("#cartAi").innerHTML = ""; return; }
  const kal = items.reduce((a, b) => a + b.kal * b.qty, 0);
  const pro = items.reduce((a, b) => a + b.protein * b.qty, 0);
  const maxPedas = Math.max(...items.map((m) => m.pedas));
  const hasDrink = items.some((m) => m.cat === "minuman");
  const hasDessert = items.some((m) => m.cat === "dessert");

  let tip, pairId = null;
  if (!hasDrink && maxPedas >= 3) { tip = "Pesananmu cukup pedas! AI menyarankan <b>Es Kelapa Muda Jeruk</b> untuk menetralkan rasa."; pairId = 13; }
  else if (!hasDrink) { tip = "Belum ada minuman. <b>Es Teh Tarik Rempah</b> cocok dengan hampir semua hidangan."; pairId = 12; }
  else if (!hasDessert) { tip = "Lengkapi dengan penutup manis — <b>Klepon Lava</b> paling disukai pelanggan."; pairId = 17; }
  else tip = "Kombinasi pesananmu sudah seimbang. Selamat menikmati! 👌";

  $("#cartAi").innerHTML = `
    <div class="box">
      🤖 <b>AI Nutrition Check</b>
      <div class="nutri">
        <div><strong>${kal}</strong>kkal</div>
        <div><strong>${pro}g</strong>protein</div>
        <div><strong>${maxPedas}/5</strong>pedas</div>
      </div>
      <p style="margin-top:.7rem">${tip}</p>
      ${pairId ? `<button class="pair-btn" onclick="addToCart(${pairId})">+ Tambahkan saran AI</button>` : ""}
    </div>`;
}

const openCart = () => { $("#cart").classList.add("open"); $("#overlay").classList.add("show"); };
const closeCart = () => { $("#cart").classList.remove("open"); $("#overlay").classList.remove("show"); };
$("#cartBtn").addEventListener("click", openCart);
$("#closeCart").addEventListener("click", closeCart);
$("#overlay").addEventListener("click", closeCart);
$("#checkoutBtn").addEventListener("click", () => {
  if (!Object.keys(cart).length) return toast("Keranjang masih kosong 😅");
  Object.keys(cart).forEach((k) => delete cart[k]);
  renderCart();
  closeCart();
  toast("🎉 Pesanan diterima! Estimasi siap dalam 15–20 menit.");
});
renderCart();

// ================= PREDIKSI KERAMAIAN =================
const HOURS = Array.from({ length: 13 }, (_, i) => i + 10); // 10.00 - 22.00
function crowdFor(day) {
  const weekend = day >= 5, friday = day === 4;
  return HOURS.map((h) => {
    let v = 15;
    v += 70 * Math.exp(-((h - 12.5) ** 2) / 1.5); // jam makan siang
    v += (weekend ? 80 : friday ? 75 : 60) * Math.exp(-((h - 19) ** 2) / 2); // jam makan malam
    if (weekend) v += 15;
    v += ((day * 7 + h * 3) % 9) - 4; // variasi kecil yang konsisten
    return Math.max(5, Math.min(100, Math.round(v)));
  });
}
function renderCrowd() {
  const day = +$("#crowdDay").value;
  const data = crowdFor(day);
  $("#crowdChart").innerHTML = data.map((v, i) => {
    const color = v > 70 ? "#e83f6f" : v > 40 ? "#e8a33d" : "#2ec4b6";
    return `<div class="bar"><div class="bar-fill" style="height:${v}%;background:${color}" data-val="${v}% ramai"></div><small>${HOURS[i]}</small></div>`;
  }).join("");
  const quiet = data.map((v, i) => ({ v, h: HOURS[i] })).filter((x) => x.h >= 11 && x.h <= 21).sort((a, b) => a.v - b.v).slice(0, 2);
  const peak = HOURS[data.indexOf(Math.max(...data))];
  $("#crowdTip").innerHTML = `🤖 <b>Saran AI:</b> Waktu paling nyaman adalah pukul <b>${quiet.map((q) => q.h + ".00").join("</b> atau <b>")}</b>. Hindari sekitar pukul ${peak}.00 (puncak keramaian).`;

  // isi pilihan jam pada form reservasi beserta label prediksi
  $("#rTime").innerHTML = data.map((v, i) => `<option value="${HOURS[i]}:00">${HOURS[i]}.00 — ${v > 70 ? "🔴 Ramai" : v > 40 ? "🟡 Sedang" : "🟢 Sepi"}</option>`).join("");
}
const today = new Date();
$("#crowdDay").value = (today.getDay() + 6) % 7;
$("#crowdDay").addEventListener("change", renderCrowd);
$("#rDate").min = today.toISOString().split("T")[0];
$("#rDate").addEventListener("change", (e) => {
  if (!e.target.value) return;
  $("#crowdDay").value = (new Date(e.target.value).getDay() + 6) % 7;
  renderCrowd();
});
renderCrowd();

$("#reserveForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = $("#rName").value.trim();
  const date = new Date($("#rDate").value).toLocaleDateString("id-ID", { weekday: "long", day: "numeric", month: "long" });
  const people = +$("#rPeople").value;
  const table = people <= 2 ? "meja dekat jendela 🪟" : people <= 6 ? "meja keluarga di area tengah" : "ruang privat lantai 2";
  $("#reserveMsg").innerHTML = `✅ Terima kasih, ${name}! Reservasi ${date} pukul ${$("#rTime").value.replace(":", ".")} tercatat. AI menempatkanmu di <b>${table}</b>.`;
  e.target.reset();
  renderCrowd();
});

// ================= TESTIMONI =================
const TESTI = [
  { t: "AI Chef-nya beneran ngerti! Lagi capek, dikasih Soto Betawi + Wedang Jahe. Pas banget.", who: "Dimas, Jakarta" },
  { t: "Ayam gepreknya juara, dan fitur prediksi keramaiannya bikin aku nggak pernah antre lagi.", who: "Sinta, Depok" },
  { t: "Suka banget sama analisis kalori di keranjang. Makan enak tapi tetap terkontrol.", who: "Rizky, Tangerang" },
  { t: "Chatbot Chef Nara ramah dan cepat jawab. Rendangnya otentik kayak buatan nenek.", who: "Ayu, Bekasi" },
];
let testiIdx = 0;
function renderTesti() {
  const x = TESTI[testiIdx];
  $("#testiSlider").innerHTML = `<div class="testi"><div class="stars">★★★★★</div><p>"${x.t}"</p><span class="who">— ${x.who}</span></div>`;
  testiIdx = (testiIdx + 1) % TESTI.length;
}
renderTesti();
setInterval(renderTesti, 5000);

// ================= CHATBOT "CHEF NARA" =================
const chatBody = $("#chatBody");
let chatStarted = false;

function addMsg(text, who) {
  const div = document.createElement("div");
  div.className = "msg " + who;
  div.innerHTML = text;
  chatBody.appendChild(div);
  chatBody.scrollTop = chatBody.scrollHeight;
}

async function botReply(text) {
  const typing = document.createElement("div");
  typing.className = "msg bot typing";
  typing.innerHTML = "<span></span><span></span><span></span>";
  chatBody.appendChild(typing);
  chatBody.scrollTop = chatBody.scrollHeight;
  await wait(600 + Math.min(text.length * 8, 1200));
  typing.remove();
  addMsg(text, "bot");
}

const list = (arr) => arr.map((m) => `• ${m.emoji} ${m.name} — ${rupiah(m.price)}`).join("\n");

// Pemahaman bahasa sederhana berbasis intent & kata kunci
function understand(input) {
  const q = input.toLowerCase();
  const has = (...k) => k.some((w) => q.includes(w));

  if (has("halo", "hai", "hi", "pagi", "siang", "malam", "assalam")) return "Halo! 👋 Aku Chef Nara, asisten AI Nusarasa. Mau cari menu, cek jam buka, atau reservasi?";
  if (has("jam", "buka", "tutup", "operasional")) return "🕙 Jam buka kami:\nSenin–Jumat: 10.00–22.00\nSabtu–Minggu: 09.00–23.00\n\nTips: datang sekitar jam 15.00–16.00 biasanya paling sepi 😉";
  if (has("lokasi", "alamat", "dimana", "di mana", "maps")) return "📍 Jl. Rempah Nusantara No. 17, Jakarta Selatan.\nAda parkir mobil & motor, dan dekat halte TransJakarta.";
  if (has("reservasi", "booking", "pesan meja", "reserve")) { setTimeout(() => location.hash = "#reservasi", 1500); return "Siap! Aku arahkan ke halaman Reservasi Pintar ya. Di sana ada prediksi keramaian supaya kamu bisa pilih jam yang nyaman 📅"; }
  if (has("vegetarian", "vegan", "sayur", "tidak makan daging")) return "🌱 Pilihan vegetarian kami:\n" + list(MENU.filter((m) => m.veg && m.cat !== "minuman").slice(0, 6));
  if (has("paling pedas", "pedas", "spicy")) return "🌶️ Untuk pecinta pedas:\n" + list(MENU.filter((m) => m.pedas >= 3).sort((a, b) => b.pedas - a.pedas)) + "\n\nSaranku: pesan Es Kelapa Muda Jeruk sebagai penyelamat 🥥";
  if (has("murah", "hemat", "budget", "promo", "diskon")) return "💸 Menu ramah kantong (≤ Rp30.000):\n" + list(MENU.filter((m) => m.price <= 30000).slice(0, 6)) + "\n\nPromo minggu ini: Paket Hemat Nasi Goreng + Es Teh cuma Rp45.000!";
  if (has("diet", "sehat", "kalori", "gizi")) return "🥗 Pilihan rendah kalori (≤ 420 kkal):\n" + list(MENU.filter((m) => m.kal <= 420 && m.cat !== "dessert").slice(0, 6));
  if (has("manis", "dessert", "penutup")) return "🍧 Yang manis-manis:\n" + list(MENU.filter((m) => m.cat === "dessert" || (m.tags.includes("manis") && m.cat !== "makanan")));
  if (has("minum", "haus", "kopi", "teh")) return "🥤 Minuman favorit:\n" + list(MENU.filter((m) => m.cat === "minuman"));
  if (has("capek", "lelah", "sedih", "galau", "bete")) return "Peluk virtual dulu 🤗 Untuk kondisi seperti ini AI-ku merekomendasikan:\n" + list([MENU[4], MENU[13], MENU[17]]) + "\n\nComfort food terbaik untuk mengembalikan mood!";
  if (has("rekomendasi", "rekomen", "saran", "enak", "best", "favorit", "andalan")) {
    const pick = [...MENU].sort(() => Math.random() - 0.5).filter((m) => m.cat === "makanan").slice(0, 2);
    return "⭐ Hari ini AI-ku merekomendasikan:\n" + list([...pick, MENU[12]]) + "\n\nMau rekomendasi yang lebih personal? Coba fitur AI Chef di atas ya!";
  }
  if (has("harga", "berapa")) {
    const found = MENU.find((m) => q.includes(m.name.toLowerCase().split(" ")[0]) || q.includes(m.name.toLowerCase().split(" ")[1] || "~"));
    if (found) return `${found.emoji} ${found.name} harganya ${rupiah(found.price)}.\n${found.desc}`;
    return "Harga menu kami mulai dari Rp16.000 (Wedang Jahe) sampai Rp95.000 (Iga Bakar Madu). Menu mana yang mau kamu cek?";
  }
  const item = MENU.find((m) => m.name.toLowerCase().split(" ").some((w) => w.length > 3 && q.includes(w)));
  if (item) return `${item.emoji} <b>${item.name}</b>\n${item.desc}\n\n💰 ${rupiah(item.price)} · 🔥 ${item.kal} kkal · Pedas ${item.pedas}/5\n<button class="pair-btn" onclick="addToCart(${item.id})">+ Tambah ke keranjang</button>`;
  if (has("makasih", "terima kasih", "thanks")) return "Sama-sama! 😊 Selamat menikmati hidangan Nusarasa.";
  if (has("wifi", "parkir", "anak", "musholla", "mushola")) return "Fasilitas kami: Wi-Fi gratis, parkir luas, musholla, kursi bayi, dan area bermain anak 👨‍👩‍👧";
  return "Hmm, aku belum yakin maksudnya 🤔 Coba tanya tentang: menu, rekomendasi, jam buka, lokasi, makanan pedas, vegetarian, atau reservasi.";
}

function openChat() {
  $("#chatbot").classList.add("open");
  $(".pulse")?.remove();
  if (!chatStarted) {
    chatStarted = true;
    botReply("Halo! 👋 Aku <b>Chef Nara</b>, asisten AI Nusarasa.\nAku bisa bantu kasih rekomendasi menu, info jam buka, atau bantu reservasi. Ada yang bisa kubantu?");
  }
  setTimeout(() => $("#chatInput").focus(), 300);
}
function sendChat(text) {
  if (!text.trim()) return;
  addMsg(text.replace(/</g, "&lt;"), "user");
  botReply(understand(text));
}
$("#chatToggle").addEventListener("click", () => ($("#chatbot").classList.contains("open") ? $("#chatbot").classList.remove("open") : openChat()));
$("#closeChat").addEventListener("click", () => $("#chatbot").classList.remove("open"));
$("#chatForm").addEventListener("submit", (e) => { e.preventDefault(); sendChat($("#chatInput").value); $("#chatInput").value = ""; });
$("#chatQuick").addEventListener("click", (e) => { if (e.target.tagName === "BUTTON") sendChat(e.target.textContent); });

// ================= TOAST =================
let toastTimer;
function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2500);
}
