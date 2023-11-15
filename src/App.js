import "./App.css";
import { HomeScreen } from "./components/HomeScreen/HomeScreen";
import { StartScreen } from "./components/StartScreen/StartScreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<StartScreen />} />
          <Route path="/location" element={<HomeScreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
