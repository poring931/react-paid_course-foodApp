import { Container } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Preloader from "./components/Preloader";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      
      <Container className="main" maxWidth="sm">

        <Preloader/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacts" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/movies/:id" element={<Movie />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

      </Container>

      <Footer/>
    </BrowserRouter>

  );
}

export default App;
