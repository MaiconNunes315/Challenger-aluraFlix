import "./reset.css";
import "./App.css";
import Header from "./components/header/header";
import Banner from "./components/banner/banner";
import Carrousel from "./components/carrousel/carrousel";




function App() {
  return (
    <div className="app">
      <Header />
      <Banner />
      <section className="banner__carrousel">
        <Carrousel />
        <Carrousel />
        <Carrousel />
      </section>
    </div>
  );
}

export default App;
