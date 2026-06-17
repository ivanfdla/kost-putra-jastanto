import { Check, ArrowRight } from 'lucide-react';

export default function PricingRooms() {
  const rooms = [
    {
      type: 'Kamar Ekstra Sejuk',
      price: '800rb',
      period: '/ Bulan',
      bgColor: 'bg-[#F8FAFC]', // Slate 50
      headerColor: 'bg-[#86EFAC]', // Green
      headerTextColor: 'text-[#1E293B]',
      features: [
        'Kasur Nyaman (Double Spring Bed)',
        'Kamar Mandi Dalam Pribadi',
        'Lemari Pakaian Luas',
        'Meja Belajar Ergonomis',
        'Sirkulasi Udara Optimal + Exhaust'
      ],
      popular: false
    },
    {
      type: 'Kamar Super Dingin',
      price: '1,2 Jt',
      period: '/ Bulan',
      bgColor: 'bg-[#FDE68A]', // Yellow
      headerColor: 'bg-[#FDBA74]', // Orange
      headerTextColor: 'text-[#1E293B]',
      features: [
        'Kasur Nyaman (Double Spring Bed)',
        'Kamar Mandi Dalam Pribadi',
        'Lemari Pakaian Luas',
        'Meja Belajar Ergonomis',
        'AC Super Dingin Anti-Gerah'
      ],
      popular: true
    }
  ];

  return (
    <section id="harga" className="py-20 md:py-32 bg-[#93C5FD] border-b-[3px] border-t-0 border-l-0 border-r-0 brutal-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-6 inline-block bg-white text-[#1E293B] px-6 py-3 brutal-border rounded-md brutal-shadow-sm">
            Investasi Nyaman Buat IPK Idaman
          </h2>
          <p className="text-xl font-bold text-[#1E293B] uppercase">
            Pilih Tipe Kamar Yang Paling Pas Dengan Gaya Hidupmu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {rooms.map((room, idx) => (
            <div key={idx} className={`relative ${room.bgColor} brutal-border rounded-md brutal-shadow-lg flex flex-col brutal-shadow-hover`}>
              {room.popular && (
                <div className="absolute -top-6 -right-4 md:-right-6 bg-[#93C5FD] text-[#1E293B] px-6 py-2 brutal-border rounded-sm brutal-shadow-sm font-black uppercase text-lg rotate-6 z-10 animate-pulse">
                  Paling Laris 🔥
                </div>
              )}
              
              <div className={`${room.headerColor} ${room.headerTextColor} p-10 border-b-[3px] border-[#1E293B] text-center`}>
                <h3 className="text-3xl font-black uppercase mb-4 tracking-tight">{room.type}</h3>
                <div className="flex items-end justify-center gap-1 bg-white text-[#1E293B] inline-block px-6 py-3 brutal-border rounded-md brutal-shadow-sm transform -rotate-2">
                  <span className="text-5xl font-black tracking-tighter">Rp {room.price}</span>
                </div>
              </div>

              <div className="p-8 md:p-10 flex-1 flex flex-col bg-opacity-90">
                <ul className="space-y-5 mb-10 flex-1">
                  {room.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-4 bg-white p-3 brutal-border rounded-sm">
                      <div className="bg-[#93C5FD] text-[#1E293B] p-1 brutal-border rounded-sm shrink-0">
                        <Check size={20} strokeWidth={4} />
                      </div>
                      <span className="font-bold text-lg text-[#1E293B]">{feat}</span>
                    </li>
                  ))}
                </ul>

                <a 
                  href={`https://wa.me/62818833528?text=Halo%20Kost%20Putra%20Jastanto,%20saya%20tertarik%20dengan%20kamar%20${encodeURIComponent(room.type)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#86EFAC] text-[#1E293B] px-6 py-5 brutal-border rounded-sm font-black uppercase text-2xl text-center flex items-center justify-center gap-3 brutal-shadow brutal-shadow-hover brutal-shadow-active hover:-translate-y-1 transition-transform"
                >
                  Amankan Kamarmu Sekarang
                  <ArrowRight size={28} strokeWidth={3} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
