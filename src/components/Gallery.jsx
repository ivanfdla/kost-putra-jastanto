import { Camera } from 'lucide-react';

export default function Gallery() {
  const photos = [
    {
      src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "Kamar Tidur Utama",
      span: "col-span-1 md:col-span-2 row-span-1 md:row-span-2",
      label: "Kamar Estetik & Lega"
    },
    {
      src: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Dapur Bersih",
      span: "col-span-1 md:col-span-1 row-span-1 md:row-span-1",
      label: "Dapur Bersih & Rapi"
    },
    {
      src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Kamar Mandi",
      span: "col-span-1 md:col-span-1 row-span-1 md:row-span-1",
      label: "Kamar Mandi Kinclong"
    },
    {
      src: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "Area Parkir dan Keamanan",
      span: "col-span-1 md:col-span-2 row-span-1 md:row-span-1",
      label: "Parkiran Motor Aman"
    },
    {
      src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Area Santai",
      span: "col-span-1 md:col-span-1 row-span-1 md:row-span-1",
      label: "Spot Nongkrong Asik"
    }
  ];

  return (
    <section id="galeri" className="py-20 md:py-32 bg-[#86EFAC] border-b-[3px] border-t-0 border-l-0 border-r-0 brutal-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-block bg-white brutal-border p-4 mb-4 transform -rotate-3 rounded-md brutal-shadow-sm">
            <Camera size={48} strokeWidth={2} className="text-[#1E293B]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-6 inline-block bg-[#FDE68A] text-[#1E293B] px-6 py-3 brutal-border brutal-shadow-sm transform rotate-1 rounded-md">
            Buktikan Sendiri Kenyamannya
          </h2>
          <p className="text-xl font-bold text-[#1E293B] bg-white inline-block px-4 py-2 brutal-border rounded-md uppercase">
            Real Picture! Apa yang kamu lihat, itu yang kamu dapat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 auto-rows-[250px] md:auto-rows-[300px]">
          {photos.map((photo, idx) => (
            <div 
              key={idx} 
              className={`relative group overflow-hidden brutal-border brutal-shadow-sm hover:brutal-shadow-lg transition-all duration-300 bg-white rounded-md ${photo.span}`}
            >
              <img 
                src={photo.src} 
                alt={photo.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay Gradient for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B]/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              
              {/* Overlay Label */}
              <div className="absolute inset-0 flex items-end justify-start p-6">
                <span className="bg-white text-[#1E293B] font-black uppercase px-5 py-2 brutal-border rounded-sm transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  {photo.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
