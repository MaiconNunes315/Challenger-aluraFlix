import "./banner.css"
import banner from "../../assets/background.png"

export default function Banner() {
    return (
        <section className="banner">
            <div className="banner__info">
                <h1>Front End</h1>
                <h2>SEO com React</h2>
                <span>Esse desafio é uma forma de aprendizado. É um mecanismo onde você pode se engajar na resolução de um problema para poder aplicar todo o conhecimento adquirido na Formação React.
                </span>
            </div>
            <div className="banner__img">
                <img src={banner} alt="banner alura" />
            </div>
        </section>
    )
}
