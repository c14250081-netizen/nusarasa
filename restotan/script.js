// ================= DATA MENU =================
// Keterangan atribut (dipakai pencarian & AI Chef):
//   pedas 0–5 · porsi: ringan | sedang | berat · kal (kkal) · protein (gram)
//   tags: hangat, dingin, kuah, bakar, goreng, sayur, comfort, premium, kopi, sehat, gurih, manis, segar, rempah
const MENU = [
  // ---------- Makanan utama ----------
  { id: 1, name: "Nasi Rendang Padang", emoji: "🍛", img: "Nasi Padang With beef rendang.jpg", cat: "makanan", price: 58000, pedas: 3, kal: 650, protein: 32, porsi: "berat", veg: false, tags: ["gurih", "hangat", "rempah", "comfort"], desc: "Rendang sapi dimasak 8 jam dengan 21 rempah, disajikan dengan nasi pulen.", bg: "#5a2e1a" },
  { id: 2, name: "Sate Ayam Madura", emoji: "🍢", img: "Sate ayam madura.jpg", cat: "makanan", price: 42000, pedas: 1, kal: 480, protein: 35, porsi: "sedang", veg: false, tags: ["gurih", "manis", "bakar", "hangat"], desc: "10 tusuk sate ayam dengan bumbu kacang kental dan lontong.", bg: "#6b3a1e" },
  { id: 3, name: "Gado-Gado Jakarta", emoji: "🥗", img: "Gado-gado in Jakarta.JPG", cat: "makanan", price: 35000, pedas: 1, kal: 420, protein: 18, porsi: "sedang", veg: true, tags: ["sayur", "segar", "sehat", "gurih"], desc: "Sayuran rebus segar, tahu, tempe, telur dengan saus kacang khas Betawi.", bg: "#2f5a2a" },
  { id: 4, name: "Ayam Geprek Sambal Bawang", emoji: "🍗", img: "Ayam geprek pedas.jpg", cat: "makanan", price: 38000, pedas: 5, kal: 610, protein: 30, porsi: "berat", veg: false, tags: ["goreng", "gurih", "hangat"], desc: "Ayam crispy digeprek dengan sambal bawang level 'nangis'. Untuk pecinta pedas sejati!", bg: "#7a1f1f" },
  { id: 5, name: "Soto Betawi", emoji: "🍲", img: "Soto Betawi (brighter).jpg", cat: "makanan", price: 45000, pedas: 1, kal: 520, protein: 28, porsi: "sedang", veg: false, tags: ["kuah", "hangat", "gurih", "comfort"], desc: "Kuah santan susu yang creamy dengan daging sapi empuk. Penghangat hati.", bg: "#6e5124" },
  { id: 6, name: "Nasi Goreng Kampung", emoji: "🍳", img: "Nasi Goreng Kampung.jpg", cat: "makanan", price: 32000, pedas: 2, kal: 580, protein: 20, porsi: "berat", veg: false, tags: ["goreng", "gurih", "hangat", "comfort"], desc: "Nasi goreng terasi dengan telur ceplok, kerupuk, dan acar.", bg: "#7a4b1a" },
  { id: 7, name: "Tahu Tempe Penyet Vegan", emoji: "🌱", img: "Sambal tempe penyet kemangi.JPG", cat: "makanan", price: 28000, pedas: 4, kal: 390, protein: 22, porsi: "sedang", veg: true, tags: ["goreng", "sayur", "sehat", "gurih"], desc: "Tahu & tempe goreng dengan sambal korek, lalapan, dan nasi merah.", bg: "#3d5a1f" },
  { id: 8, name: "Iga Bakar Madu", emoji: "🍖", img: "Iga Bakar dan Nasi Bakar.jpg", cat: "makanan", price: 95000, pedas: 2, kal: 780, protein: 45, porsi: "berat", veg: false, tags: ["bakar", "manis", "premium", "hangat"], desc: "Iga sapi premium dibakar dengan glaze madu dan kecap, empuk lepas dari tulang.", bg: "#5c2a14" },
  { id: 19, name: "Nasi Uduk Betawi", emoji: "🍚", img: "Nasi uduk netherlands.jpg", cat: "makanan", price: 30000, pedas: 1, kal: 560, protein: 18, porsi: "sedang", veg: false, tags: ["gurih", "hangat", "comfort"], desc: "Nasi santan wangi daun salam dengan semur jengkol, telur balado, dan bawang goreng.", bg: "#6b5a2a" },
  { id: 20, name: "Rawon Surabaya", emoji: "🍲", img: "Rawon Setan.jpg", cat: "makanan", price: 48000, pedas: 1, kal: 540, protein: 30, porsi: "berat", veg: false, tags: ["kuah", "hangat", "gurih", "rempah", "comfort"], desc: "Sup daging sapi berkuah hitam kluwek, dengan tauge, telur asin, dan sambal.", bg: "#2e2218" },
  { id: 21, name: "Sop Buntut", emoji: "🥣", img: "Sop Buntut Oxtail soup.jpg", cat: "makanan", price: 85000, pedas: 0, kal: 600, protein: 40, porsi: "berat", veg: false, tags: ["kuah", "hangat", "gurih", "premium", "comfort"], desc: "Buntut sapi empuk dalam kaldu bening rempah, wortel, kentang, dan jeruk limau.", bg: "#6b3a22" },
  { id: 22, name: "Mie Ayam Jamur", emoji: "🍜", img: "Mi ayam jamur.JPG", cat: "makanan", price: 30000, pedas: 1, kal: 520, protein: 22, porsi: "sedang", veg: false, tags: ["kuah", "hangat", "gurih", "comfort"], desc: "Mie kenyal dengan ayam kecap, jamur, sawi, dan kuah kaldu terpisah.", bg: "#6b5530" },
  { id: 23, name: "Gudeg Jogja", emoji: "🍛", img: "Gudeg Ayam.jpg", cat: "makanan", price: 40000, pedas: 1, kal: 600, protein: 25, porsi: "berat", veg: false, tags: ["manis", "hangat", "comfort"], desc: "Nangka muda dimasak gula jawa semalaman, dengan ayam opor, telur, dan krecek.", bg: "#5a3a1a" },
  { id: 24, name: "Ayam Betutu Bali", emoji: "🍗", img: "Ayam betutu khas Gilimanuk.jpg", cat: "makanan", price: 62000, pedas: 4, kal: 640, protein: 42, porsi: "berat", veg: false, tags: ["kuah", "hangat", "gurih", "rempah"], desc: "Ayam utuh dibumbui base genep khas Bali, dikukus lalu disiram kuah pedas.", bg: "#5a4a1a" },
  { id: 25, name: "Gurame Bakar Kecap", emoji: "🐟", img: "Gurame bakar kecap 2.JPG", cat: "makanan", price: 75000, pedas: 2, kal: 480, protein: 40, porsi: "berat", veg: false, tags: ["bakar", "manis", "gurih", "sehat", "premium"], desc: "Gurame segar dibakar dengan olesan kecap manis, lalapan, dan sambal dabu-dabu.", bg: "#4a2e1a" },
  { id: 26, name: "Pecel Lele Lamongan", emoji: "🐟", img: "Pecel Lele 1.JPG", cat: "makanan", price: 30000, pedas: 3, kal: 560, protein: 28, porsi: "sedang", veg: false, tags: ["goreng", "gurih", "hangat"], desc: "Lele goreng garing dengan sambal terasi ulek, lalapan, dan nasi hangat.", bg: "#3d4a1f" },
  { id: 27, name: "Capcay Sayur", emoji: "🥦", img: "Cap Cai.JPG", cat: "makanan", price: 32000, pedas: 0, kal: 300, protein: 10, porsi: "sedang", veg: true, tags: ["sayur", "sehat", "hangat", "gurih"], desc: "Tumis aneka sayuran segar, jamur, dan tahu dengan saus tiram vegetarian.", bg: "#3d5a2a" },
  { id: 28, name: "Sayur Lodeh & Nasi", emoji: "🥘", img: "Sayur lodeh.JPG", cat: "makanan", price: 28000, pedas: 1, kal: 420, protein: 12, porsi: "sedang", veg: true, tags: ["kuah", "sayur", "hangat", "comfort", "gurih"], desc: "Labu siam, terong, kacang panjang, dan tempe dalam kuah santan gurih.", bg: "#5a5a2a" },

  // ---------- Camilan ----------
  { id: 9, name: "Pisang Goreng Gula Aren", emoji: "🍌", img: "Pisang Goreng.jpg", cat: "camilan", price: 22000, pedas: 0, kal: 340, protein: 6, porsi: "ringan", veg: true, tags: ["goreng", "manis", "hangat", "comfort"], desc: "Pisang kepok goreng tepung renyah dengan saus gula aren dan keju parut.", bg: "#7a6a1a" },
  { id: 10, name: "Tahu Crispy Cabe Garam", emoji: "🧈", img: "Tahu goreng crispy.jpg", cat: "camilan", price: 20000, pedas: 3, kal: 280, protein: 12, porsi: "ringan", veg: true, tags: ["goreng", "gurih", "hangat"], desc: "Tahu sutra digoreng crispy, ditumis cabai, bawang putih, dan garam.", bg: "#6b4a1e" },
  { id: 11, name: "Lumpia Goreng Rebung", emoji: "🌯", img: "Lumpia at Teh Jawa, Purwokerto Station, Purwokerto 2015-03-20.jpg", cat: "camilan", price: 25000, pedas: 1, kal: 300, protein: 14, porsi: "ringan", veg: false, tags: ["goreng", "gurih", "hangat"], desc: "Lumpia goreng isi rebung, udang, dan telur dengan saus sambal manis.", bg: "#6b3020" },
  { id: 29, name: "Tempe Mendoan", emoji: "🫓", img: "Tempe mendoan sambal kecap.jpg", cat: "camilan", price: 18000, pedas: 1, kal: 260, protein: 14, porsi: "ringan", veg: true, tags: ["goreng", "gurih", "hangat"], desc: "Tempe tipis berbalut tepung berbumbu, setengah matang khas Banyumas, dengan cabai rawit kecap.", bg: "#6b5a1e" },
  { id: 30, name: "Siomay Bandung", emoji: "🥟", img: "Siomay Bandung.jpg", cat: "camilan", price: 28000, pedas: 1, kal: 380, protein: 18, porsi: "sedang", veg: false, tags: ["gurih", "hangat"], desc: "Siomay ikan tenggiri, kentang, kol, tahu, dan telur dengan bumbu kacang.", bg: "#5a4a2a" },
  { id: 31, name: "Bakwan Jagung", emoji: "🌽", img: "Bakwan jagung @ Bornéo à Paris @ Galerie Vaugirard @ Paris (32963590453).jpg", cat: "camilan", price: 16000, pedas: 1, kal: 240, protein: 6, porsi: "ringan", veg: true, tags: ["goreng", "gurih", "manis", "hangat"], desc: "Perkedel jagung manis renyah dengan daun bawang dan seledri, plus saus sambal.", bg: "#7a6a1a" },

  // ---------- Minuman ----------
  { id: 12, name: "Es Teh Tarik Rempah", emoji: "🧋", img: "Teh Tarik.jpg", cat: "minuman", price: 18000, pedas: 0, kal: 180, protein: 3, porsi: "ringan", veg: true, tags: ["manis", "dingin", "rempah"], desc: "Teh tarik dengan sentuhan kayu manis dan kapulaga.", bg: "#6b4a2e" },
  { id: 13, name: "Es Kelapa Muda Jeruk", emoji: "🥥", img: "Es Kelapa Muda.JPG", cat: "minuman", price: 22000, pedas: 0, kal: 120, protein: 1, porsi: "ringan", veg: true, tags: ["segar", "dingin", "sehat"], desc: "Kelapa muda segar dengan perasan jeruk nipis. Penetral pedas terbaik!", bg: "#2a5a52" },
  { id: 14, name: "Wedang Jahe Serai", emoji: "🍵", img: "Wedang Jahe.jpg", cat: "minuman", price: 16000, pedas: 1, kal: 90, protein: 0, porsi: "ringan", veg: true, tags: ["hangat", "sehat", "comfort", "rempah"], desc: "Jahe merah bakar dan serai, menghangatkan tubuh yang lelah.", bg: "#5a4a1a" },
  { id: 15, name: "Kopi Susu Gula Aren", emoji: "☕", img: "Es Kopi Susu Gula Aren.jpg", cat: "minuman", price: 24000, pedas: 0, kal: 210, protein: 5, porsi: "ringan", veg: true, tags: ["manis", "kopi", "dingin"], desc: "Espresso robusta Temanggung, susu segar, dan gula aren asli.", bg: "#3d2a1a" },
  { id: 32, name: "Es Jeruk Peras", emoji: "🍊", img: "Es jeruk peras.jpg", cat: "minuman", price: 15000, pedas: 0, kal: 110, protein: 1, porsi: "ringan", veg: true, tags: ["segar", "dingin", "sehat"], desc: "Jeruk peras segar tanpa pengawet, kaya vitamin C.", bg: "#7a5a1a" },
  { id: 33, name: "Jus Alpukat Cokelat", emoji: "🥑", img: "Jus Alpukat Coklat.jpg", cat: "minuman", price: 25000, pedas: 0, kal: 320, protein: 4, porsi: "ringan", veg: true, tags: ["manis", "dingin", "comfort"], desc: "Alpukat mentega diblender lembut dengan susu dan siraman cokelat.", bg: "#4a5a2a" },
  { id: 34, name: "Bandrek Susu", emoji: "🫖", img: "Bandrek Bandung.JPG", cat: "minuman", price: 18000, pedas: 1, kal: 160, protein: 3, porsi: "ringan", veg: true, tags: ["hangat", "manis", "rempah", "comfort"], desc: "Minuman jahe, gula aren, dan rempah khas Sunda dengan susu. Menghangatkan badan.", bg: "#5a3a1a" },

  // ---------- Dessert ----------
  { id: 16, name: "Es Cendol Durian", emoji: "🍧", img: "Es Cendol Durian.jpg", cat: "dessert", price: 28000, pedas: 0, kal: 380, protein: 4, porsi: "ringan", veg: true, tags: ["manis", "dingin", "segar", "comfort"], desc: "Cendol pandan, santan, gula merah, dan daging durian Medan.", bg: "#3d5a2a" },
  { id: 17, name: "Klepon Lava", emoji: "🟢", img: "Klepon Khas Tulungagung.jpg", cat: "dessert", price: 20000, pedas: 0, kal: 260, protein: 3, porsi: "ringan", veg: true, tags: ["manis", "comfort"], desc: "Klepon dengan isian gula aren cair yang lumer, taburan kelapa parut.", bg: "#2a5a2a" },
  { id: 18, name: "Martabak Manis Mini", emoji: "🥞", img: "Terang bulan keju.jpg", cat: "dessert", price: 32000, pedas: 0, kal: 450, protein: 8, porsi: "sedang", veg: true, tags: ["manis", "hangat", "comfort"], desc: "Martabak manis isi cokelat, keju, dan kacang. Mood booster dijamin!", bg: "#5a3a1a" },
  { id: 35, name: "Es Teler", emoji: "🍨", img: "Es Teller 77.jpg", cat: "dessert", price: 26000, pedas: 0, kal: 360, protein: 4, porsi: "ringan", veg: true, tags: ["manis", "dingin", "segar"], desc: "Alpukat, kelapa muda, nangka, dan cincau dengan santan dan sirup.", bg: "#5a6a3a" },
  { id: 36, name: "Bubur Ketan Hitam", emoji: "🥣", img: "Bubur ketan hitam.jpg", cat: "dessert", price: 18000, pedas: 0, kal: 300, protein: 5, porsi: "ringan", veg: true, tags: ["manis", "hangat", "comfort"], desc: "Ketan hitam dimasak lembut dengan gula merah, disiram santan hangat.", bg: "#2a1a2a" },
  { id: 37, name: "Dadar Gulung", emoji: "🟩", img: "Indonesian Food, Dadar Gulung Cake.jpg", cat: "dessert", price: 15000, pedas: 0, kal: 220, protein: 3, porsi: "ringan", veg: true, tags: ["manis", "comfort"], desc: "Crepes pandan isi unti kelapa parut dan gula merah.", bg: "#2a5a2a" },
];

const AI_PICKS = [1, 4, 20, 13, 16]; // ditandai "AI Pick" (menu andalan)
const byId = (id) => MENU.find((m) => m.id === id);

// Rating rata-rata dari ulasan pelanggan (1–5). Dipakai sebagai pembeda kalau dua menu sama cocoknya.
const RATING = {
  1: 4.9, 2: 4.7, 3: 4.6, 4: 4.8, 5: 4.8, 6: 4.6, 7: 4.5, 8: 4.9, 19: 4.6, 20: 4.8, 21: 4.9, 22: 4.6, 23: 4.7, 24: 4.7,
  25: 4.8, 26: 4.6, 27: 4.5, 28: 4.5, 9: 4.7, 10: 4.6, 11: 4.5, 29: 4.7, 30: 4.6, 31: 4.5, 12: 4.7, 13: 4.8, 14: 4.6,
  15: 4.8, 32: 4.5, 33: 4.7, 34: 4.6, 16: 4.8, 17: 4.7, 18: 4.8, 35: 4.7, 36: 4.6, 37: 4.5,
};
const rupiah = (n) => "Rp " + n.toLocaleString("id-ID");

// Foto menu: nama file dari Wikimedia Commons (lisensi bebas), atau path lokal seperti "images/rendang.jpg"
// untuk foto milik sendiri. Kalau foto gagal dimuat, emoji tetap tampil sebagai cadangan.
const photo = (m, w = 500) =>
  /^(images\/|https?:)/.test(m.img) ? m.img : `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(m.img)}?width=${w}`;
const photoTag = (m, w) => `<img src="${photo(m, w)}" alt="${m.name}" loading="lazy" onerror="this.remove()" />`;
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

// Koneksi database (lihat config.js). Tanpa pengaturan, website berjalan dalam mode demo.
const CFG = window.NUSARASA_CONFIG || {};
const db = CFG.supabaseUrl && CFG.supabaseKey && window.supabase
  ? window.supabase.createClient(CFG.supabaseUrl, CFG.supabaseKey)
  : null;
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
            <span>⭐ ${RATING[m.id] || "-"}</span>
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
// Cara kerja:
// 1. Setiap menu dinilai dari SEMUA jawaban pelanggan: level pedas, mood, tingkat lapar,
//    keinginan rasa, dan vegetarian. Menu yang jelas tidak cocok langsung dicoret.
// 2. Susunan hidangan mengikuti tingkat lapar (mis. lapar banget = makanan utama + camilan
//    + minuman + penutup).
// 3. AI mencari KOMBINASI dengan nilai tertinggi yang total harganya tidak melebihi budget.
// Tidak ada unsur acak: jawaban yang sama selalu menghasilkan rekomendasi yang sama.
const prefs = { mood: null, lapar: null, want: [] };
$$(".chips").forEach((group) => {
  group.addEventListener("click", (e) => {
    const chip = e.target.closest(".chip");
    if (!chip) return;
    const name = group.dataset.name;
    if (group.dataset.multi) {
      chip.classList.toggle("active");
      prefs[name] = [...group.querySelectorAll(".chip.active")].map((c) => c.dataset.value);
      return;
    }
    const wasActive = chip.classList.contains("active");
    group.querySelectorAll(".chip").forEach((c) => c.classList.remove("active"));
    if (!wasActive) chip.classList.add("active");
    prefs[name] = wasActive ? null : chip.dataset.value;
  });
});
$("#pedas").addEventListener("input", (e) => ($("#pedasVal").textContent = e.target.value));
$("#budget").addEventListener("input", (e) => ($("#budgetVal").textContent = rupiah(+e.target.value)));

const MOOD_RULES = {
  senang: { label: "lagi senang", text: "Mood kamu lagi bagus, saatnya merayakan dengan menu spesial!", tags: { bakar: 12, premium: 12, segar: 8, manis: 4 } },
  capek: { label: "lagi capek", text: "Kamu lagi capek. AI memilih yang hangat, berkuah, dan menenangkan.", tags: { kuah: 14, hangat: 10, comfort: 10, kopi: 14, rempah: 6 } },
  sedih: { label: "lagi sedih", text: "Peluk virtual dulu 🤗. Comfort food dan yang manis bisa bantu memperbaiki mood.", tags: { comfort: 16, manis: 12, hangat: 8 } },
  semangat: { label: "lagi semangat", text: "Energi kamu tinggi! AI memilih yang berani rasa dan tinggi protein.", tags: { kopi: 12, bakar: 8, rempah: 8 }, spicy: 10, protein: 10 },
};
const TAG_WHY = {
  kuah: "kuahnya hangat", hangat: "disajikan hangat", comfort: "comfort food", kopi: "kafeinnya bikin segar",
  rempah: "kaya rempah", manis: "manisnya bikin mood naik", bakar: "aroma bakarannya menggoda", premium: "menu spesial",
  segar: "rasanya segar", pedas: "pedasnya membakar semangat", protein: "tinggi protein",
};
const WANT_LABEL = { kuah: "berkuah", bakar: "bakar-bakaran", gurih: "gurih", manis: "manis", segar: "segar", sehat: "sehat" };
const HUNGER_TEXT = {
  ringan: "Karena cuma sedikit lapar, AI memilih camilan/hidangan ringan + minuman.",
  sedang: "Untuk lapar sedang, AI memilih makanan utama + minuman.",
  berat: "Karena lapar banget, AI menyusun makanan utama + camilan + minuman.",
};

// Nilai satu menu untuk peran tertentu dalam susunan (main / side / drink / dessert)
function scoreItem(m, p, role) {
  if (p.veg && !m.veg) return null;
  const food = role === "main" || role === "side";
  let s = 50;
  const why = [];

  // 1) Level pedas
  if (food) {
    if (p.pedas <= 1 && m.pedas >= 3) return null; // tidak suka pedas → coret menu pedas
    if (p.pedas >= 4 && role === "main" && m.pedas <= 1) s -= 25; // pecinta pedas → hindari yang hambar
    const diff = Math.abs(m.pedas - p.pedas);
    s += 18 - diff * 9;
    if (diff === 0) why.push(m.pedas ? `level pedasnya pas (${m.pedas}/5)` : "tidak pedas, sesuai seleramu");
  } else if (role === "drink" && p.pedas >= 3 && m.tags.includes("segar")) {
    s += 15;
    why.push("penetral rasa pedas");
  }

  // 2) Mood
  if (p.mood) {
    const rule = MOOD_RULES[p.mood];
    const hits = [];
    for (const [tag, w] of Object.entries(rule.tags)) if (m.tags.includes(tag)) { s += w; hits.push(tag); }
    if (rule.spicy && food && m.pedas >= 3) { s += rule.spicy; hits.push("pedas"); }
    if (rule.protein && food && m.protein >= 30) { s += rule.protein; hits.push("protein"); }
    if (p.mood === "capek" && m.tags.includes("dingin") && !m.tags.includes("kopi")) s -= 6; // capek → utamakan yang hangat
    if (hits.length) why.push(`${TAG_WHY[hits[0]]}, cocok saat ${rule.label}`);
  }

  // 3) Keinginan rasa (boleh lebih dari satu)
  for (const w of p.want) {
    const ok = w === "sehat" ? m.tags.includes("sehat") || (food && m.kal <= 350) : m.tags.includes(w);
    if (ok) { s += 18; why.push(`sesuai keinginan: ${WANT_LABEL[w]}`); }
  }
  if (p.want.includes("sehat")) {
    if (m.kal > 600) s -= 15;
    if (m.tags.includes("manis") && !p.want.includes("manis")) s -= 8; // sehat → kurangi gula
    if (m.tags.includes("goreng") && role === "side") s -= 6;
  }

  // 5) Rating pelanggan
  s += ratingBonus(m);

  // 4) Tingkat lapar → ukuran porsi makanan utama
  if (role === "main") {
    const fit = { ringan: { ringan: 12, sedang: 4, berat: -14 }, sedang: { ringan: -4, sedang: 12, berat: 4 }, berat: { ringan: -20, sedang: 0, berat: 16 } };
    const lapar = p.lapar || "sedang";
    s += fit[lapar][m.porsi];
    if (lapar === "berat" && m.porsi === "berat") why.push("porsinya besar & mengenyangkan");
    if (lapar === "ringan" && m.porsi !== "berat") why.push("porsinya pas, tidak bikin begah");
  }
  return { score: s, why };
}

function slotsFor(lapar) {
  const isFood = (m) => m.cat === "makanan";
  const drink = { role: "drink", label: "Minuman", pool: (m) => m.cat === "minuman" };
  const dessert = { role: "dessert", label: "Penutup", pool: (m) => m.cat === "dessert", optional: true };
  if (lapar === "ringan") return [
    { role: "main", label: "Hidangan ringan", pool: (m) => m.cat === "camilan" || (isFood(m) && m.porsi !== "berat" && m.kal <= 450) },
    drink, dessert,
  ];
  if (lapar === "berat") return [
    { role: "main", label: "Makanan utama", pool: isFood },
    { role: "side", label: "Camilan", pool: (m) => m.cat === "camilan" },
    drink, dessert,
  ];
  return [{ role: "main", label: "Makanan utama", pool: isFood }, drink, dessert, { role: "side", label: "Camilan", pool: (m) => m.cat === "camilan", optional: true }];
}

const OPTIONAL_BAR = 75; // menu opsional (penutup/camilan tambahan) hanya ditambahkan kalau nilainya tinggi

const ratingBonus = (m) => ((RATING[m.id] || 4.5) - 4.5) * 25; // 0–10 poin

// Seberapa cocok sebuah menu dipadukan dengan makanan utama yang sudah dipilih
function pairing(main, m, role) {
  if (!main) return { bonus: 0 };
  let bonus = 0;
  let why = null;
  if (role === "drink") {
    if (main.pedas >= 3 && m.tags.includes("segar")) { bonus += 6; why = `segar, meredam pedasnya ${main.name}`; }
    if (main.tags.includes("manis") && m.tags.includes("manis")) bonus -= 6; // jangan manis ketemu manis
    if (main.tags.includes("gurih") && m.tags.includes("manis") && !main.tags.includes("manis")) { bonus += 4; why = why || `manisnya menyeimbangkan gurih ${main.name}`; }
    if (main.porsi === "berat" && m.tags.includes("segar")) bonus += 3;
  } else if (role === "dessert") {
    if (main.tags.includes("hangat") && m.tags.includes("dingin")) { bonus += 4; why = "penutup dingin setelah hidangan hangat"; }
    if (main.tags.includes("manis") && m.tags.includes("manis")) bonus -= 4;
  } else if (role === "side") {
    if (main.tags.includes("goreng") && m.tags.includes("goreng")) bonus -= 4; // variasi tekstur
    if (main.tags.includes("kuah") && m.tags.includes("goreng")) { bonus += 4; why = `renyah, pas jadi teman ${main.name}`; }
  }
  return { bonus, why };
}

function recommend(p) {
  const slots = slotsFor(p.lapar || "sedang").map((slot) => {
    const scored = MENU.filter(slot.pool)
      .map((m) => ({ m, ...scoreItem(m, p, slot.role) }))
      .filter((x) => x.score != null && x.score !== undefined)
      .sort((a, b) => b.score - a.score || a.m.price - b.m.price);
    // kandidat: 8 terbaik + 3 termurah (supaya tetap ada pilihan untuk budget kecil)
    const cheap = [...scored].sort((a, b) => a.m.price - b.m.price).slice(0, 3);
    const cands = [...new Set([...scored.slice(0, 8), ...cheap])];
    return { ...slot, cands: slot.optional ? [null, ...cands] : cands };
  });
  if (slots.some((s) => !s.optional && !s.cands.length)) return { error: "nomenu" };

  let best = null;
  let cheapestRequired = 0;
  slots.forEach((s) => { if (!s.optional) cheapestRequired += Math.min(...s.cands.map((c) => c.m.price)); });

  (function search(i, picked, total, value) {
    if (total > p.budget) return;
    if (i === slots.length) {
      if (!best || value > best.value || (value === best.value && total < best.total)) best = { picked: [...picked], total, value };
      return;
    }
    const slot = slots[i];
    for (const c of slot.cands) {
      if (c === null) { search(i + 1, picked, total, value); continue; }
      const pair = pairing(picked[0]?.m, c.m, slot.role);
      const score = c.score + pair.bonus;
      // makanan utama paling menentukan (bobot 1,5×); tambahan opsional hanya masuk kalau benar-benar cocok
      const gain = slot.optional ? (score - OPTIONAL_BAR) * 0.5 : slot.role === "main" ? score * 1.5 : score;
      if (slot.optional && gain <= 0) continue;
      picked.push({ ...c, score, why: pair.why ? [pair.why, ...c.why] : c.why, label: slot.label, bonus: !!slot.optional });
      search(i + 1, picked, total + c.m.price, value + gain);
      picked.pop();
    }
  })(0, [], 0, 0);

  if (!best) return { error: "budget", need: cheapestRequired };
  return best;
}

// Ubah nilai mentah jadi persentase kecocokan (50 = netral)
const matchPct = (score) => Math.max(5, Math.min(99, Math.round(100 / (1 + Math.exp(-(score - 50) / 22)))));

$("#aiForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const p = { ...prefs, pedas: +$("#pedas").value, budget: +$("#budget").value, veg: $("#vegetarian").checked };
  const box = $("#aiResult");
  const steps = ["Membaca mood & tingkat lapar...", `Menilai ${MENU.length} menu satu per satu...`, "Mencocokkan level pedas & rasa...", "Mencari kombinasi terbaik sesuai budget..."];
  box.innerHTML = `<div class="ai-loading"><div class="spinner"></div><div class="steps">${steps.map((s) => `<p>${s}</p>`).join("")}</div></div>`;
  for (const el of box.querySelectorAll(".steps p")) { await wait(400); el.classList.add("done"); el.textContent = "✓ " + el.textContent; }
  await wait(250);

  const res = recommend(p);
  if (res.error) {
    const msg = res.error === "budget"
      ? `Budget ${rupiah(p.budget)} belum cukup untuk susunan ini. Minimal sekitar <b>${rupiah(res.need)}</b>, atau pilih "Sedikit" lapar.`
      : "Belum ada menu yang cocok dengan kombinasi pilihanmu. Coba longgarkan level pedas atau keinginan rasa.";
    box.innerHTML = `<div class="ai-placeholder"><div class="brain">😅</div><p>${msg}</p></div>`;
    return;
  }

  const picks = res.picked;
  const totalKal = picks.reduce((a, x) => a + x.m.kal, 0);
  const extras = picks.filter((x) => x.bonus).map((x) => x.m.name);
  const intro = p.mood ? MOOD_RULES[p.mood].text : "Berdasarkan pilihanmu, inilah racikan terbaik dari AI Chef.";
  box.innerHTML = `
    <div class="ai-summary">🤖 ${intro} ${HUNGER_TEXT[p.lapar || "sedang"]}${extras.length ? ` Bonus: <b>${extras.join(", ")}</b> ditambahkan karena sangat cocok dan masih masuk budget.` : ""}
      <div class="ai-total">💰 <b>${rupiah(res.total)}</b> dari budget ${rupiah(p.budget)} · 🔥 ±${totalKal} kkal${p.veg ? " · 🌱 semua vegetarian" : ""}</div>
    </div>
    ${picks.map((x, i) => {
      const pct = matchPct(x.score);
      return `
      <div class="rec-item" style="animation-delay:${i * 0.12}s">
        <div class="rec-emoji thumb">${x.m.emoji}${photoTag(x.m, 120)}</div>
        <div class="rec-body">
          <span class="rec-role">${x.label}</span>
          <h4>${x.m.name}</h4>
          <small>${rupiah(x.m.price)} · ⭐ ${RATING[x.m.id] || "-"} · ${x.m.kal} kkal · ${x.m.pedas ? "🌶️".repeat(x.m.pedas) : "tidak pedas"}</small>
          ${x.why.length ? `<small class="rec-why">💡 ${x.why.slice(0, 2).join(" · ")}</small>` : ""}
          <div class="match"><span style="width:0" data-w="${pct}"></span></div>
        </div>
        <div class="rec-score">${pct}%<br/><button class="add-btn" onclick="addToCart(${x.m.id})">+</button></div>
      </div>`;
    }).join("")}
    <button class="btn btn-outline full" onclick="addAllRec([${picks.map((x) => x.m.id)}])">Tambahkan Semua ke Pesanan</button>`;
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
        <span class="e thumb">${m.emoji}${photoTag(m, 120)}</span>
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
$("#oType").addEventListener("change", (e) => ($("#oTable").style.display = e.target.value === "dine-in" ? "" : "none"));
$("#checkoutForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  if (!Object.keys(cart).length) return toast("Keranjang masih kosong 😅");
  const items = Object.entries(cart).map(([id, qty]) => {
    const m = MENU.find((x) => x.id === +id);
    return { id: m.id, name: m.name, price: m.price, qty };
  });
  const order = {
    name: $("#oName").value.trim(),
    phone: $("#oPhone").value.trim(),
    order_type: $("#oType").value,
    table_no: $("#oType").value === "dine-in" ? $("#oTable").value.trim() || null : null,
    note: $("#oNote").value.trim() || null,
    items,
    total: items.reduce((a, b) => a + b.price * b.qty, 0),
  };

  const btn = $("#checkoutBtn");
  btn.disabled = true;
  btn.textContent = "Mengirim pesanan...";
  const { error } = db ? await db.from("orders").insert(order) : { error: null };
  btn.disabled = false;
  btn.textContent = "Pesan Sekarang";
  if (error) return toast("❌ Gagal mengirim pesanan. Coba lagi sebentar.");

  Object.keys(cart).forEach((k) => delete cart[k]);
  e.target.reset();
  $("#oTable").style.display = "";
  renderCart();
  closeCart();
  toast(`🎉 Terima kasih, ${order.name}! Pesanan diterima, estimasi siap 15–20 menit.`);
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

$("#reserveForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = $("#rName").value.trim();
  const date = new Date($("#rDate").value).toLocaleDateString("id-ID", { weekday: "long", day: "numeric", month: "long" });
  const people = +$("#rPeople").value;
  const table = people <= 2 ? "meja dekat jendela 🪟" : people <= 6 ? "meja keluarga di area tengah" : "ruang privat lantai 2";
  const time = $("#rTime").value;
  const msg = $("#reserveMsg");
  const btn = e.target.querySelector("button[type=submit]");

  btn.disabled = true;
  btn.textContent = "Mengirim...";
  const { error } = db
    ? await db.from("reservations").insert({
        name,
        phone: $("#rPhone").value.trim(),
        date: $("#rDate").value,
        time,
        people,
        table_area: table.replace(/ 🪟$/, ""),
        note: $("#rNote").value.trim() || null,
      })
    : { error: null };
  btn.disabled = false;
  btn.textContent = "Konfirmasi Reservasi";

  if (error) {
    msg.classList.add("error");
    msg.textContent = "❌ Reservasi gagal dikirim. Coba lagi sebentar, atau hubungi kami via telepon.";
    return;
  }
  msg.classList.remove("error");
  msg.innerHTML = `✅ Terima kasih, ${esc(name)}! Reservasi ${date} pukul ${time.replace(":", ".")} tercatat. AI menempatkanmu di <b>${table}</b>. Kami akan konfirmasi via WhatsApp.`;
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
  if (has("tidak pedas", "gak pedas", "ga pedas", "nggak pedas", "enggak pedas", "anti pedas")) return "😌 Menu yang tidak pedas sama sekali:\n" + list(MENU.filter((m) => m.pedas === 0 && m.cat !== "minuman")) + "\n\nMenu bertanda pedas 1/5 juga masih sangat ringan, sambalnya bisa dipisah.";
  if (has("paling pedas", "pedas", "spicy")) return "🌶️ Untuk pecinta pedas:\n" + list(MENU.filter((m) => m.pedas >= 3).sort((a, b) => b.pedas - a.pedas)) + "\n\nSaranku: pesan Es Kelapa Muda Jeruk sebagai penyelamat 🥥";
  if (has("murah", "hemat", "budget", "promo", "diskon")) return "💸 Menu ramah kantong (≤ Rp30.000):\n" + list(MENU.filter((m) => m.price <= 30000).slice(0, 6)) + "\n\nPromo minggu ini: Paket Hemat Nasi Goreng + Es Teh cuma Rp45.000!";
  if (has("diet", "sehat", "kalori", "gizi")) return "🥗 Pilihan rendah kalori (≤ 420 kkal):\n" + list(MENU.filter((m) => m.kal <= 420 && m.cat !== "dessert").slice(0, 6));
  if (has("manis", "dessert", "penutup")) return "🍧 Yang manis-manis:\n" + list(MENU.filter((m) => m.cat === "dessert" || (m.tags.includes("manis") && m.cat !== "makanan")));
  if (has("minum", "haus", "kopi", "teh")) return "🥤 Minuman favorit:\n" + list(MENU.filter((m) => m.cat === "minuman"));
  // Mood disebut di chat → pakai mesin rekomendasi yang sama dengan AI Chef
  const mood = has("capek", "lelah", "ngantuk") ? "capek" : has("sedih", "galau", "bete", "stres") ? "sedih"
    : has("semangat", "excited") ? "semangat" : has("senang", "happy", "bahagia", "gajian") ? "senang" : null;
  if (mood) {
    const res = recommend({ mood, lapar: "sedang", pedas: 1, budget: 150000, want: [], veg: false });
    if (!res.error) return `${MOOD_RULES[mood].text}\n\nRacikan dari AI-ku:\n` + res.picked.map((x) => `• ${x.m.emoji} ${x.m.name} — ${rupiah(x.m.price)}\n   💡 ${x.why.find((w) => w.includes("cocok saat")) || x.why[0] || x.label}`).join("\n") + "\n\nMau yang lebih pas lagi? Isi form AI Chef di atas ya!";
  }
  if (has("rekomendasi", "rekomen", "saran", "enak", "best", "favorit", "andalan", "terlaris")) {
    return "⭐ Menu andalan yang paling sering direkomendasikan AI kami:\n" + list(AI_PICKS.map(byId)) + "\n\nMau rekomendasi personal sesuai mood, lapar & budget? Coba fitur AI Chef di atas ya!";
  }
  if (has("harga", "berapa")) {
    const found = MENU.find((m) => q.includes(m.name.toLowerCase().split(" ")[0]) || q.includes(m.name.toLowerCase().split(" ")[1] || "~"));
    if (found) return `${found.emoji} ${found.name} harganya ${rupiah(found.price)}.\n${found.desc}`;
    const sorted = [...MENU].sort((a, b) => a.price - b.price);
    const [lo, hi] = [sorted[0], sorted[sorted.length - 1]];
    return `Harga menu kami mulai dari ${rupiah(lo.price)} (${lo.name}) sampai ${rupiah(hi.price)} (${hi.name}). Menu mana yang mau kamu cek?`;
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
