import "./reset.css";
import "./App.css";
import Header from "./components/header/header";
import Carrousel from "./components/carrousel/carrousel";
import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
import AddNewVideos from "./pages/NewVideos/addNewVideos";
import AddNewCategory from "./pages/newCategory/addNewCategory";
import FooterOurButton from "./components/footer/footerOurButton";
import DataContext from "./contexts/dataContext";
import { useGetData } from "./hook/useDatas";
import { Box, CircularProgress } from "@mui/material";

function App() {

  const data = useGetData();
  const style = {
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    margin: "18% 0"
  }

  return (
    <DataContext.Provider value={data}>
      <BrowserRouter>

        <Header />
        <Routes>

          <Route path="/" element={
            data ?
              <Carrousel />
              :
              <Box sx={style}>
                <CircularProgress />
              </Box>} />

          <Route path="add-new-videos" element={<AddNewVideos />} />
          <Route path="add-new-category" element={<AddNewCategory />} />


        </Routes>
        <FooterOurButton />



      </BrowserRouter>
    </DataContext.Provider>
  );
}

export default App;
