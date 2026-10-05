// ================= PENGATURAN DATABASE (SUPABASE) =================
// Isi dua nilai di bawah dari dashboard Supabase:
//   Project Settings → API Keys  → "Publishable key" (atau "anon public")
//   Project Settings → Data API  → "Project URL"
// Kunci ini memang aman ditaruh di website publik; keamanan data diatur oleh
// aturan (RLS) di file supabase-setup.sql.
//
// Selama masih kosong, website berjalan dalam "mode demo": reservasi & pesanan
// tidak disimpan ke mana pun.
window.NUSARASA_CONFIG = {
  supabaseUrl: "",
  supabaseKey: "",
};
