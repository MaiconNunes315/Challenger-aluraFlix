import "./reset.css";
import "./App.css";
import Header from "./components/header/header";
import Carrousel from "./components/carrousel/carrousel";
import { BrowserRouter, Link, Route, Router, Routes, useLocation } from "react-router-dom";
import AddNewVideos from "./pages/NewVideos/addNewVideos";
import AddNewCategory from "./pages/newCategory/addNewCategory";
import FooterOurButton from "./components/footer/footerOurButton";
import DataContext from "./contexts/dataContext";
import { useGetData } from "./hook/useDatas";

function App() {

  const data = useGetData()

  return (
    <DataContext.Provider value={data}>
      <BrowserRouter>

        <Header />
        <Routes>
          <Route path="/" element={<Carrousel />} />
          <Route path="add-new-videos" element={<AddNewVideos />} />
          <Route path="add-new-category" element={<AddNewCategory />} />


        </Routes>
        <FooterOurButton />



      </BrowserRouter>
    </DataContext.Provider>
  );
}

export default App;
