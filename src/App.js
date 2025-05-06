import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import DetailsPage from "./pages/DetailsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="search" element={<SearchPage />}/>
        <Route path="details" element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
