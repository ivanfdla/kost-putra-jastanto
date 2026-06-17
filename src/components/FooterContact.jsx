import { MapPin, Phone, MessageCircle, Mail } from 'lucide-react';

export default function FooterContact() {
  return (
    <footer id="hubungi" className="bg-[#F8FAFC] pt-20 border-t-0 border-l-0 border-r-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Brand & Text */}
          <div className="lg:col-span-5">
            <a href="#" className="text-3xl font-black tracking-tight text-[#1E293B] flex items-center gap-3 mb-6 uppercase">
              <div className="w-10 h-10 bg-[#93C5FD] brutal-border rounded-sm flex items-center justify-center brutal-shadow-sm">
                <span className="font-black text-2xl text-[#1E293B]">K</span>
              </div>
              Kost Putra Jastanto
            </a>
            <p className="text-lg font-bold text-[#1E293B] mb-8 max-w-sm bg-white p-4 brutal-border rounded-md brutal-shadow-sm">
              Pilihan cerdas untuk mahasiswa UI. Lingkungan positif, aman, dan nyaman agar fokus meraih prestasi!
            </p>
            
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 bg-[#FDE68A] flex items-center justify-center brutal-border rounded-sm brutal-shadow-sm brutal-shadow-hover text-[#1E293B]">
                <Mail size={24} strokeWidth={2.5} />
              </a>
              <a href="https://wa.me/62818833528?text=Halo%20Kost%20Putra%20Jastanto,%20saya%20ingin%20bertanya%20tentang%20ketersediaan%20kamar." target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#86EFAC] flex items-center justify-center brutal-border rounded-sm brutal-shadow-sm brutal-shadow-hover text-[#1E293B]">
                <MessageCircle size={24} strokeWidth={2.5} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xl font-black uppercase text-[#1E293B] mb-6 bg-[#93C5FD] inline-block px-3 py-1 brutal-border rounded-sm brutal-shadow-sm">Menu Cepat</h4>
            <ul className="space-y-4">
              <li><a href="#lokasi" className="font-bold text-[#1E293B] uppercase hover:bg-[#FDE68A] px-2 py-1 -ml-2 rounded-sm transition-colors border-2 border-transparent hover:border-[#1E293B]">Lokasi Kami</a></li>
              <li><a href="#fasilitas" className="font-bold text-[#1E293B] uppercase hover:bg-[#FDE68A] px-2 py-1 -ml-2 rounded-sm transition-colors border-2 border-transparent hover:border-[#1E293B]">Fasilitas</a></li>
              <li><a href="#harga" className="font-bold text-[#1E293B] uppercase hover:bg-[#FDE68A] px-2 py-1 -ml-2 rounded-sm transition-colors border-2 border-transparent hover:border-[#1E293B]">Tipe Kamar & Harga</a></li>
              <li><a href="#galeri" className="font-bold text-[#1E293B] uppercase hover:bg-[#FDE68A] px-2 py-1 -ml-2 rounded-sm transition-colors border-2 border-transparent hover:border-[#1E293B]">Galeri Foto</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4">
            <h4 className="text-xl font-black uppercase text-[#1E293B] mb-6 bg-[#FDBA74] inline-block px-3 py-1 brutal-border rounded-sm brutal-shadow-sm">Kontak Kami</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="bg-white p-2 brutal-border rounded-sm text-[#1E293B] shrink-0 brutal-shadow-sm">
                  <MapPin size={24} strokeWidth={2.5} />
                </div>
                <p className="font-bold text-[#1E293B]">Jl. Galur No. 29c, RT.02/RW.03, Kukusan, Beji, Depok, Jawa Barat 16425</p>
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-white p-2 brutal-border rounded-sm text-[#1E293B] brutal-shadow-sm">
                  <Phone size={24} strokeWidth={2.5} />
                </div>
                <p className="font-black text-[#1E293B] text-xl">0818-833-528</p>
              </li>
            </ul>
          </div>

        </div>
      </div>
      
      {/* Copyright */}
      <div className="bg-white text-[#1E293B] py-6 border-t-[3px] border-[#1E293B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-black uppercase">&copy; {new Date().getFullYear()} Kost Putra Jastanto. All rights reserved.</p>
          <p className="font-bold text-sm bg-[#FDE68A] text-[#1E293B] px-3 py-1 brutal-border rounded-sm brutal-shadow-sm">Dibuat dengan ❤️ untuk Mahasiswa UI</p>
        </div>
      </div>
    </footer>
  );
}
