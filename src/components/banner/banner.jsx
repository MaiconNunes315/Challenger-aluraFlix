import React, { useEffect, useState } from "react"
import "./banner.css"

export default function Banner() {

    return (

        <section className="banner" >
            <div className="banner__info">
                {/* <h1>{category}</h1>
                <h2>{descriptionCategory}</h2> */}
                <span>Esse desafio é uma brincadeira com os gêneros musicais relacionados com cada tecnologia </span>
            </div>


            <div className="banner__img">
                <iframe className='modalVideo'
                    // src={`${baseUrl}${idVideo}`}
                    // title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
                </iframe>
            </div>
        </section >

    )
}
