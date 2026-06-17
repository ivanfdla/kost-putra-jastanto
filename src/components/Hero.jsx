import { MapPin, ArrowRight, MessageCircle, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 min-h-[95vh] flex items-center brutal-border border-t-0 border-l-0 border-r-0 bg-[#F8FAFC] overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Text Content */}
          <div className="w-full lg:w-[55%] text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white text-[#1E293B] brutal-border rounded-md brutal-shadow-sm font-bold text-sm mb-8 transform -rotate-2 uppercase">
              <MapPin size={18} strokeWidth={2.5} className="text-[#1E293B]" />
              <span>Kukusan Teknik (Kutek) UI</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#1E293B] leading-[1.1] mb-6 tracking-tight uppercase">
              KOST PUTRA EKSKLUSIF, <br />
              <span className="bg-[#86EFAC] text-[#1E293B] inline-block px-3 mt-2 brutal-border rounded-md transform rotate-1">
                SELANGKAH KE UI.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-[#1E293B] font-semibold mb-10 max-w-2xl leading-relaxed bg-white p-5 brutal-border rounded-md brutal-shadow-sm">
              Fokus ngampus, sisanya kami yang urus! Hunian premium yang dirancang khusus untuk kenyamanan produktivitas mahasiswa UI. Bebas ribet, aman 24 jam, dan pastinya disetujui orang tua.
            </p>
            
            <div className="flex flex-col sm:flex-row items-stretch lg:items-center justify-start gap-5">
              <a
                href="https://wa.me/62818833528?text=Halo%20Kost%20Putra%20Jastanto,%20saya%20ingin%20bertanya%20tentang%20ketersediaan%20kamar."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#FDBA74] text-[#1E293B] px-8 py-4 brutal-border rounded-md font-black text-lg uppercase brutal-shadow brutal-shadow-hover brutal-shadow-active"
              >
                <MessageCircle size={24} strokeWidth={2.5} />
                Tanya Kamar via WA
              </a>
              <a
                href="#fasilitas"
                className="flex items-center justify-center gap-3 bg-white text-[#1E293B] px-8 py-4 brutal-border rounded-md font-black text-lg uppercase brutal-shadow brutal-shadow-hover brutal-shadow-active"
              >
                Lihat Fasilitas
                <ArrowRight size={24} strokeWidth={2.5} />
              </a>
            </div>
            
            <div className="mt-12 flex flex-wrap items-center justify-start gap-4 text-base font-bold text-[#1E293B] uppercase">
              <div className="flex items-center gap-2 bg-[#FDE68A] px-4 py-2 brutal-border rounded-sm">
                <Zap size={18} strokeWidth={3} /> AC & Non-AC
              </div>
              <div className="flex items-center gap-2 bg-[#93C5FD] text-[#1E293B] px-4 py-2 brutal-border rounded-sm">
                <Zap size={18} strokeWidth={3} /> WiFi Super Cepat
              </div>
            </div>
          </div>

          {/* Hero Image / Graphic */}
          <div className="w-full lg:w-[45%] relative">
            {/* Decorative Badges Attached to Image */}
            <div className="absolute -top-5 -left-5 md:-left-8 bg-[#93C5FD] text-[#1E293B] px-4 py-2 brutal-border rounded-md font-black text-lg md:text-xl brutal-shadow-sm uppercase -rotate-6 z-30 hidden sm:block">
              Bawa Koper Aja!
            </div>
            <div className="absolute top-6 -right-4 md:-right-8 bg-[#FDE68A] text-[#1E293B] px-4 py-2 brutal-border rounded-md font-black text-lg md:text-xl brutal-shadow-sm uppercase rotate-12 z-30 hidden sm:block">
              🚶‍♂️ 5 Menit Jalan ke UI
            </div>

            <div className="relative overflow-hidden brutal-border rounded-md brutal-shadow-lg aspect-[4/5] md:aspect-[4/3] lg:aspect-[3/4] bg-[#FDBA74]">
              <img 
                src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Kamar Kost Putra Jastanto" 
                className="w-full h-full object-cover filter contrast-125 sepia-[20%]"
              />
              
              {/* Floating Price Badge */}
              <div className="absolute bottom-6 -left-4 md:left-6 bg-[#86EFAC] text-[#1E293B] p-5 brutal-border rounded-md brutal-shadow-sm rotate-[-3deg] z-20">
                <p className="text-sm font-bold uppercase tracking-wider mb-1">Harga Mulai</p>
                <p className="text-3xl font-black leading-none uppercase">Rp 800rb<span className="text-lg">/bln</span></p>
              </div>
            </div>
            
            {/* Background offset block for soft brutal depth effect */}
            <div className="absolute -inset-4 bg-[#93C5FD] brutal-border rounded-md -z-10 translate-x-6 translate-y-6 hidden md:block"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
