import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import LittleHavana from "./routes/LittleHavana/LittleHavana";
import Wynwood from "./routes/Wynwood/Wynwood";
function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/little-havana" element={<LittleHavana />} />
        <Route path="/wynwood" element={<Wynwood />} />
      </Routes>
    </div>
  );
}

export default App;
