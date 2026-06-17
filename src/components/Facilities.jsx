import { Utensils, ParkingCircle, Cctv, Wifi } from 'lucide-react';

export default function Facilities() {
  const facilities = [
    {
      title: 'Dapur Bebas Akses',
      icon: <Utensils size={48} strokeWidth={2.5} />,
      bgColor: 'bg-[#FDE68A]', // Yellow
      textColor: 'text-[#1E293B]',
      desc: 'Lapar tengah malam? Dapur bersih dengan peralatan lengkap siap jadi penyelamat akhir bulanmu.',
    },
    {
      title: 'Parkir Anti-Repot',
      icon: <ParkingCircle size={48} strokeWidth={2.5} />,
      bgColor: 'bg-[#93C5FD]', // Blue
      textColor: 'text-[#1E293B]',
      desc: 'Area parkir motor lega dan aman. Bebas keluar-masuk kapan aja tanpa takut lecet atau repot geser-geser.',
    },
    {
      title: 'Keamanan Ekstra',
      icon: <Cctv size={48} strokeWidth={2.5} />,
      bgColor: 'bg-[#FDBA74]', // Orange
      textColor: 'text-[#1E293B]',
      desc: 'Orang tua tenang, kamu pun nyaman. Sistem keamanan berlapis dengan CCTV yang memantau 24 jam non-stop.',
    },
    {
      title: 'Koneksi Dewa',
      icon: <Wifi size={48} strokeWidth={2.5} />,
      bgColor: 'bg-[#86EFAC]', // Green
      textColor: 'text-[#1E293B]',
      desc: 'WiFi ngebut anti-lelet! Bebas streaming, nugas lancar semalaman, sampai mabar tanpa takut nge-lag.',
    },
  ];

  return (
    <section id="fasilitas" className="py-20 md:py-32 bg-[#F8FAFC] border-b-[3px] border-t-0 border-l-0 border-r-0 brutal-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-6 inline-block bg-[#93C5FD] text-[#1E293B] px-6 py-3 brutal-border rounded-md brutal-shadow-sm">
            Fasilitas Rasa Sultan
          </h2>
          <p className="text-2xl font-bold text-[#1E293B] bg-[#86EFAC] inline-block px-4 py-2 brutal-border rounded-md uppercase">
            Nyaman Maksimal, Kantong Aman!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilities.map((fac, idx) => (
            <div 
              key={idx} 
              className={`${fac.bgColor} ${fac.textColor} brutal-border rounded-md brutal-shadow-lg p-8 flex flex-col items-center text-center brutal-shadow-hover cursor-pointer`}
            >
              <div className="bg-white text-[#1E293B] p-5 brutal-border rounded-sm mb-8 brutal-shadow-sm transform -rotate-3">
                {fac.icon}
              </div>
              <h3 className="text-2xl font-black uppercase mb-4">{fac.title}</h3>
              <p className="text-lg font-semibold bg-white p-4 brutal-border rounded-sm w-full">
                {fac.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
