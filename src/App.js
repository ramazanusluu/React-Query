import "./App.css";
import { Routes, Route } from "react-router-dom";
import Example from "./components/Example";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import CleanCode from "./components/CleanCode";
import Infinite from "./components/Infinite";
import ParallelQueries from "./components/ParallelQueries";
import Dynamic from "./components/ParallelQueries/Dynamic";
import Manuel from "./components/ParallelQueries/Manuel";
import QueryCancel from "./components/cancellation/QueryCancel";
import Cancellation from "./components/cancellation";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="example" element={<Example />} />
          <Route path="clean-code" element={<CleanCode />} />
          <Route path="infinite" element={<Infinite />} />
          <Route path="parallel-queries" element={<ParallelQueries />} />
          <Route
            path="parallel-queries/dynamic"
            element={<Dynamic users={[1, 3]} />}
          />
          <Route path="parallel-queries/manuel" element={<Manuel />} />
          <Route path="cancellation" element={<Cancellation />} />
          <Route path="query-cancel" element={<QueryCancel />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
