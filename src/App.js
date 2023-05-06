import "./reset.css";
import "./App.css";
import Header from "./components/header/header";
import Banner from "./components/banner/banner";
import Carrousel from "./components/carrousel/carrousel";
import Footer from "./components/footer/footer";
import { Routes } from "react-router-dom";
import { useState, useEffect } from 'react'


function App() {
  const [db, setDb] = useState([])

  useEffect(() => {

    async function getData() {
      const response = await fetch("./data.json", { headers: { Accept: "Application/json" } })
      const responseJson = await response.json()
      setDb(responseJson)
    }

    getData()


  }, [])

  return (
    <div className="app">
      <Header />
      <Banner />

      {db.map((card, index) => (
        <section key={card.id} className="carrousel">
          <Carrousel name={card.name} id={index} style={{ backgroundColor: `${card.color}` }} description={card.description} videos={card.videos} color={card.color} />
        </section>
      ))}

      <Footer />
    </div>
  );
}

export default App;
