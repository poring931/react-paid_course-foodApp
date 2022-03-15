import { Container } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Category from "./pages/Category";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      
      <Container className="main" maxWidth="xl">

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacts" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/category/:name" element={<Category />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

      </Container>

      <Footer/>
    </BrowserRouter>

  );
}

export default App;
