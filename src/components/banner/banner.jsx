import React, { useState } from "react"
import "./banner.css"

export default function Banner({ color, title, description, video, titleVideo, background }) {
    const baseUrl = "https://youtube.com/embed/"

    const [infoVideo, setInfoVideo] = useState([]);

    function renderVideo() {
        setInfoVideo(video[0])
    }

    return (

        <section onLoad={renderVideo} className="banner" style={{ backgroundImage: background ? `url(${background})` : "url(https://blogs.glowscotland.org.uk/er/public/wwhs3options/uploads/sites/3192/2013/02/image00118.jpg)" }} >
            <div className="banner__info">
                <h1 style={{ background: color }}>{title}</h1>
                <h2>{description}</h2>
                <span>Esse desafio é uma brincadeira com os gêneros musicais relacionados com cada tecnologia </span>
            </div>


            <div className="banner__img">
                <iframe className='banner__yt'
                    src={`${baseUrl}${infoVideo.idVideo}`}
                    title={infoVideo.titleVideo}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
                </iframe>
            </div>
        </section >

    )
}
