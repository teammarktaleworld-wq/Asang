
// import Navbar from './components/Navbar';
// import ContactCTA from './components/sections/ContactCTA';
// import Philosophy from './components/sections/Philosophy';
// import SelectedProjects from './components/sections/SelectedProjects';
// import Testimonials from './components/sections/Testimonials';
// import Footer from './components/Footer';
// import Hero from './components/Hero';

// export default function Home() {
//   return (
//     <main className="min-h-screen flex flex-col bg-[#e5dcc7] selection:bg-gray-900 selection:text-white">
//       <Navbar />
//       <Hero/>
//       <Philosophy />
//       <SelectedProjects />
//       <Testimonials/>
//       <ContactCTA />
//       <Footer />
//     </main>
//   );
// }











import ContactCTA from "./components/sections/ContactCTA";
import Philosophy from "./components/sections/Philosophy";
import SelectedProjects from "./components/sections/SelectedProjects";
import Testimonials from "./components/sections/Testimonials";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#e5dcc7] selection:bg-gray-900 selection:text-white">
      <Hero />
      <Philosophy />
      <SelectedProjects />
      <Testimonials />
      <ContactCTA />
      <Footer />
    </main>
  );
}