import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./MainPage";
import SecondPage from "./SecondPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/second" element={<SecondPage />} />
      </Routes>
    </div>
  );
}

export default App;
