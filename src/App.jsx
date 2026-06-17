import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutLocation from './components/AboutLocation';
import Facilities from './components/Facilities';
import PricingRooms from './components/PricingRooms';
import Gallery from './components/Gallery';
import FooterContact from './components/FooterContact';

function App() {
  return (
    <div className="font-sans antialiased text-[#1E293B] bg-[#F8FAFC] min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <AboutLocation />
        <Facilities />
        <PricingRooms />
        <Gallery />
      </main>
      <FooterContact />
    </div>
  );
}

export default App;
