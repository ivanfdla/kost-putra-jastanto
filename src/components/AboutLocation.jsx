import { MapPin, Navigation, Store, Map } from 'lucide-react';

export default function AboutLocation() {
  return (
    <section id="lokasi" className="py-20 md:py-32 bg-[#93C5FD] brutal-border border-t-0 border-l-0 border-r-0 relative overflow-hidden">
      {/* Background abstract shape */}
      <div className="absolute top-10 left-10 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #1E293B 3px, transparent 4px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-6 inline-block bg-white text-[#1E293B] px-6 py-3 brutal-border rounded-md brutal-shadow-sm transform -rotate-1">
            Lokasi Juara, Hemat Waktu
          </h2>
          <p className="text-2xl font-bold text-[#1E293B] bg-[#FDE68A] inline-block px-4 py-2 brutal-border rounded-md transform rotate-1 uppercase">
            Jalan Kaki ke Kampus? Bisa Banget!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Info Card */}
          <div className="bg-white brutal-border rounded-md brutal-shadow-lg p-8 md:p-12 flex flex-col justify-center transform rotate-1">
            <div className="flex items-start gap-4 mb-8">
              <div className="bg-[#FDBA74] text-[#1E293B] p-4 brutal-border rounded-md">
                <MapPin size={32} strokeWidth={3} />
              </div>
              <div>
                <h3 className="text-2xl font-black text-[#1E293B] mb-2 uppercase">Alamat Lengkap</h3>
                <div className="bg-[#F8FAFC] px-4 py-2 brutal-border rounded-sm inline-block">
                  <p className="text-lg font-bold text-[#1E293B]">Jalan Galur No. 29c, RT/RW 02/03</p>
                  <p className="text-base font-semibold text-[#1E293B]">Kel. Kukusan, Kec. Beji, Kota Depok, Jawa Barat 16425</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 bg-[#86EFAC] text-[#1E293B] p-5 brutal-border rounded-md brutal-shadow-sm">
                <Navigation size={28} className="shrink-0 mt-1" strokeWidth={2.5} />
                <p className="font-bold text-xl">Posisi emas di Kutek. Nggak perlu pusing mikirin macet atau telat kelas pagi, tinggal jalan kaki langsung sampai gerbang UI.</p>
              </div>
              <div className="flex items-start gap-4 bg-[#FDE68A] text-[#1E293B] p-5 brutal-border rounded-md brutal-shadow-sm">
                <Store size={28} className="shrink-0 mt-1" strokeWidth={2.5} />
                <p className="font-bold text-xl">Semua kebutuhan hidup mahasiswa ada di depan mata. Mulai dari warkop, laundry, minimarket, sampai warteg. Hidup jadi super praktis!</p>
              </div>
            </div>
          </div>

          {/* Map Embed */}
          <div className="bg-[#FDBA74] brutal-border rounded-md brutal-shadow-lg p-4 flex flex-col min-h-[400px] transform -rotate-1">
            <div className="flex-1 bg-[#F8FAFC] brutal-border rounded-sm relative overflow-hidden group">
              <iframe 
                src="https://maps.google.com/maps?q=Kost%20Putra%20Jastanto%20Kukusan%20Depok&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Kost Putra Jastanto"
                className="absolute inset-0 grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>
            <div className="mt-4 flex justify-between items-center px-2">
              <span className="font-bold text-[#1E293B] bg-[#FDE68A] px-3 py-1 brutal-border rounded-sm uppercase">Lihat rute di Maps</span>
              <a 
                href="https://www.google.com/maps/search/Kost+Putra+Jastanto+Kukusan+Depok" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#93C5FD] text-[#1E293B] p-2 brutal-border rounded-sm brutal-shadow-sm brutal-shadow-hover transition-transform"
              >
                <Map size={24} strokeWidth={2.5} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
