import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import LittleHavana from "./routes/LittleHavana/LittleHavana";
import Wynwood from "./routes/Wynwood/Wynwood";
import Brickell from "./routes/Brickell/Brickell";
import MiamiBeach from "./routes/MiamiBeach/MiamiBeach";

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
      </Routes>
    </div>
  );
}

export default App;
