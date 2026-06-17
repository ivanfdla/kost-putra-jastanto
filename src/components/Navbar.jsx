import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Lokasi', href: '#lokasi' },
    { name: 'Fasilitas', href: '#fasilitas' },
    { name: 'Harga', href: '#harga' },
    { name: 'Galeri', href: '#galeri' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#F8FAFC] brutal-border border-l-0 border-r-0 border-t-0 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="text-2xl font-black tracking-tight text-[#1E293B] flex items-center gap-2 group uppercase">
              <div className="w-8 h-8 bg-[#93C5FD] brutal-border rounded-sm flex items-center justify-center group-hover:bg-[#FDBA74] transition-colors">
                <span className="font-black text-lg text-[#1E293B]">K</span>
              </div>
              Kost Putra Jastanto
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#1E293B] font-bold hover:bg-[#86EFAC] px-3 py-1 brutal-border border-transparent hover:border-[#1E293B] rounded-sm transition-all uppercase"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#hubungi"
              className="bg-[#93C5FD] text-[#1E293B] px-6 py-2 brutal-border rounded-sm font-black brutal-shadow brutal-shadow-hover brutal-shadow-active transition-transform uppercase"
            >
              Hubungi Kami
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#1E293B] bg-[#FDE68A] brutal-border rounded-sm p-2 brutal-shadow-sm brutal-shadow-active"
            >
              {isOpen ? <X size={24} strokeWidth={3} /> : <Menu size={24} strokeWidth={3} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#F8FAFC] brutal-border border-l-0 border-r-0 border-t-4 absolute w-full left-0">
          <div className="px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 bg-white brutal-border rounded-sm font-bold uppercase text-[#1E293B] hover:bg-[#86EFAC] transition-colors brutal-shadow-sm"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#hubungi"
              onClick={() => setIsOpen(false)}
              className="block mt-2 text-center bg-[#93C5FD] text-[#1E293B] px-5 py-4 brutal-border rounded-sm uppercase font-black brutal-shadow transition-transform active:translate-y-1 active:translate-x-1 active:shadow-none"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
