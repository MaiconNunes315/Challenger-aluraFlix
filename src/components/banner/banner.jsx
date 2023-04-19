import "./banner.css"
import banner from "../../assets/background.png"
import Carrousel from "../carrousel/carrousel"

export default function Banner() {
    return (

        <section className="banner">
            <div className="banner__info">
                <h1>Front End</h1>
                <h2>Pagodinho para os desenvolvedores front end</h2>
                <span>Esse desafio é uma brincadeira com os gêneros musicais relacionados com cada tecnologia </span>
            </div>
            <div className="banner__img">
                <iframe
                    className="banner__yt"
                    src="https://www.youtube.com/embed/XvJWNjQD2Yc?controls=0"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                    rel="0"></iframe>
            </div>
        </section>
    )
}
