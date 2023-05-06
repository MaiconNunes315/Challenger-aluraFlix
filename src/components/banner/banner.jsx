import ReactPlayer from "react-player"
import "./banner.css"


export default function Banner() {
    return (

        <section className="banner">
            <div className="banner__info">
                <h1>Front End</h1>
                <h2>Pagodinho para os desenvolvedores front end</h2>
                <span>Esse desafio é uma brincadeira com os gêneros musicais relacionados com cada tecnologia </span>
            </div>
            <div className="banner__img">
                <ReactPlayer width={"30vw"} height={"18vw"} style={{ minWidth: "170px", minHeight: "100px", borderRadius: "10px" }} playsinline playing config={{
                    youtube: {
                        playerVars: {
                            rel: 0,
                            fs: 0,
                        },
                    }
                }} light url="https://youtu.be/XvJWNjQD2Yc" />
            </div>
        </section>
    )
}
