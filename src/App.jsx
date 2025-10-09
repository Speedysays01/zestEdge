import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Founder from "./pages/Founder";
import Services from "./pages/Services";
import Why from "./pages/Why";
import Collab from "./pages/Collab";
import Footer from './components/Foooter'
// Service detail pages
import SetupLaunch from "./components/SetupLaunch";
import StrategicConsulting from "./components/StrategicConsulting";
import TurnaroundConsulting from "./components/TurnaroundConsulting";
import ExpansionStrategy from "./components/ExpansionStrategy";
import CustomConsulting from "./components/CustomConsulting";
import CulinaryCollabs from "./pages/CullinaryCollabs";

function App() {
  return (
    <div className="overflow-x-hidden">



      <Navbar />
      <Routes>
        {/* Main site */}
        <Route path="/" element={<><Home /><About /><Founder /><Services /><Collab/><CulinaryCollabs/><Why/><Footer/></>} />

        {/* Services detail pages */}
        <Route path="/services/setup" element={<SetupLaunch />} />
        <Route path="/services/strategic" element={<StrategicConsulting />} />
        <Route path="/services/turnaround" element={<TurnaroundConsulting />} />
        <Route path="/services/expansion" element={<ExpansionStrategy />} />
        <Route path="/services/custom" element={<CustomConsulting />} />
      </Routes>
  </div>
  );
}

export default App;
