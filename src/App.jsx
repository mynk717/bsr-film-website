import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Clients from './components/Clients';
import Facilities from './components/Facilities'; // Import
import WhyChooseUs from './components/WhyChooseUs'; // Import
import Footer from './components/Footer'; // Import

function App() {
  return (
    <div className="bg-gray-900 text-white dark:bg-white dark:text-black transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Clients />
        <Facilities />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  )
}



export default App;