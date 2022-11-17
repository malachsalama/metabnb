import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";

import Header from "./components/header/Header"
import PlacesContextProvider from "./context/PlacesContext";
import Home from "./pages/home/Home";
import Places from "./pages/places/Places";

function App() {
  return (
    <div className="App">
      <PlacesContextProvider>
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/places" element={<Places />} />
          </Routes>
          <Footer />
        </Router>
      </PlacesContextProvider>
    </div>
  );
}

export default App;