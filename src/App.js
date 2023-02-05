import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import LittleHavana from "./routes/LittleHavana/LittleHavana";
import Wynwood from "./routes/Wynwood/Wynwood";
import Brickell from "./routes/Brickell/Brickell";
import MiamiBeach from "./routes/MiamiBeach/MiamiBeach";
import Everglades from "./routes/Everglades/Everglades";
import Review from "./routes/Review/Review";
import About from "./routes/About/About";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/little-havana" element={<LittleHavana />} />
        <Route path="/wynwood" element={<Wynwood />} />
        <Route path="/brickell" element={<Brickell />} />
        <Route path="/miamibeach" element={<MiamiBeach />} />
        <Route path="/everglades" element={<Everglades />} />
        <Route path="/review/:id" element={<Review />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
