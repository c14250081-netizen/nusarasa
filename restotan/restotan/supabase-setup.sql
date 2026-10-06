-- =====================================================================
-- NUSARASA — struktur database untuk reservasi, pesanan, dan admin.
-- Cara pakai: Supabase → SQL Editor → New query → tempel semua isi file
-- ini → GANTI email admin di baris paling bawah → klik "Run".
-- =====================================================================

-- ---------- Tabel reservasi ----------
create table if not exists public.reservations (
  id          bigint generated always as identity primary key,
  created_at  timestamptz not null default now(),
  name        text not null check (char_length(name) between 1 and 100),
  phone       text not null check (char_length(phone) between 5 and 30),
  date        date not null,
  time        text not null check (char_length(time) <= 10),
  people      int  not null check (people between 1 and 50),
  table_area  text check (char_length(table_area) <= 100),
  note        text check (char_length(note) <= 500),
  status      text not null default 'baru'
              check (status in ('baru', 'dikonfirmasi', 'selesai', 'dibatalkan'))
);

-- ---------- Tabel pesanan ----------
create table if not exists public.orders (
  id          bigint generated always as identity primary key,
  created_at  timestamptz not null default now(),
  name        text not null check (char_length(name) between 1 and 100),
  phone       text check (char_length(phone) <= 30),
  order_type  text not null default 'dine-in' check (order_type in ('dine-in', 'takeaway')),
  table_no    text check (char_length(table_no) <= 20),
  note        text check (char_length(note) <= 500),
  items       jsonb not null,
  total       int  not null check (total >= 0),
  status      text not null default 'baru'
              check (status in ('baru', 'diproses', 'siap', 'selesai', 'dibatalkan'))
);

-- ---------- Daftar email yang boleh membuka halaman admin ----------
create table if not exists public.admins (
  email text primary key
);

-- Fungsi bantu: apakah user yang sedang login termasuk admin?
create or replace function public.is_admin()
returns boolean
language sql stable security definer
set search_path = public
as $$
  select exists (
    select 1 from public.admins
    where lower(email) = lower(auth.jwt() ->> 'email')
  );
$$;

-- ---------- Keamanan (Row Level Security) ----------
-- Pengunjung website hanya boleh MENGIRIM reservasi/pesanan baru.
-- Hanya admin yang boleh MELIHAT, MENGUBAH, dan MENGHAPUS.
alter table public.reservations enable row level security;
alter table public.orders       enable row level security;
alter table public.admins       enable row level security; -- tanpa policy = tidak bisa diakses dari website

drop policy if exists "pengunjung kirim reservasi" on public.reservations;
drop policy if exists "admin lihat reservasi"      on public.reservations;
drop policy if exists "admin ubah reservasi"       on public.reservations;
drop policy if exists "admin hapus reservasi"      on public.reservations;
drop policy if exists "pengunjung kirim pesanan"   on public.orders;
drop policy if exists "admin lihat pesanan"        on public.orders;
drop policy if exists "admin ubah pesanan"         on public.orders;
drop policy if exists "admin hapus pesanan"        on public.orders;

create policy "pengunjung kirim reservasi" on public.reservations
  for insert to anon, authenticated with check (status = 'baru');
create policy "admin lihat reservasi" on public.reservations
  for select to authenticated using (public.is_admin());
create policy "admin ubah reservasi" on public.reservations
  for update to authenticated using (public.is_admin()) with check (public.is_admin());
create policy "admin hapus reservasi" on public.reservations
  for delete to authenticated using (public.is_admin());

create policy "pengunjung kirim pesanan" on public.orders
  for insert to anon, authenticated with check (status = 'baru');
create policy "admin lihat pesanan" on public.orders
  for select to authenticated using (public.is_admin());
create policy "admin ubah pesanan" on public.orders
  for update to authenticated using (public.is_admin()) with check (public.is_admin());
create policy "admin hapus pesanan" on public.orders
  for delete to authenticated using (public.is_admin());

-- Hak akses dasar untuk API Supabase
grant usage on schema public to anon, authenticated;
grant insert on public.reservations, public.orders to anon, authenticated;
grant select, update, delete on public.reservations, public.orders to authenticated;
grant usage, select on all sequences in schema public to anon, authenticated;
grant execute on function public.is_admin() to authenticated;

-- ---------- Notifikasi langsung (realtime) di halaman admin ----------
do $$
begin
  alter publication supabase_realtime add table public.reservations;
exception when duplicate_object then null;
end $$;
do $$
begin
  alter publication supabase_realtime add table public.orders;
exception when duplicate_object then null;
end $$;

-- ---------- GANTI dengan email yang kamu pakai untuk login admin ----------
insert into public.admins (email) values ('ganti-dengan-email-admin@contoh.com')
on conflict do nothing;
