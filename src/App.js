import "./reset.css";
import "./App.css";
import Header from "./components/header/header";
import Carrousel from "./components/carrousel/carrousel";
import { BrowserRouter, Link, Route, Router, Routes, useLocation } from "react-router-dom";
import AddNewVideos from "./pages/NewVideos/addNewVideos";
import AddNewCategory from "./pages/newCategory/addNewCategory";
import FooterOurButton from "./components/footer/footerOurButton";

function App() {



  return (
    <BrowserRouter>

      <Header />
      <Routes>
        <Route path="/" element={<Carrousel />} />
        <Route path="add-new-videos" element={<AddNewVideos />} />
        <Route path="add-new-category" element={<AddNewCategory />} />


      </Routes>
      <FooterOurButton />



    </BrowserRouter>
  );
}

export default App;
