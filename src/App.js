import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Landing/Home/Home";
import Navbar from "./Components/Share/Navbar/Navbar";
import Intro from "./Components/Landing/Intro/Intro";
import Services from "./Components/Landing/Services/Services";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
