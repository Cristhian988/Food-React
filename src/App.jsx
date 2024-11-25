import Banner from "./components/Banner";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import OurServices from "./components/OurServices";
import TopList from "./components/TopList";

function App() {
  return (
    <div className="overflow-x-hidden">
      <div className="min-h-screen bg-white/50 backdrop-blur-3xl">
        <Navbar />
        <Hero />
        <TopList />
        <Banner />
        <OurServices />
      </div>
    </div>
  );
}

export default App;
