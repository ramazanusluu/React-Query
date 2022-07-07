import "./App.css";
import { Routes, Route } from "react-router-dom";
import Example from "./components/Example";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import CleanCode from "./components/CleanCode";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="example" element={<Example />} />
          <Route path="clean-code" element={<CleanCode />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
