
import ReactPlayer from "react-player";
import "./carrousel.css"
import { useState } from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

export default function Carrousel({ name, id, style, description, videos, color }) {

    const baseUrl = "https://youtu.be/"
    const [moveX, setMoveX] = useState(0);

    function prev(id) {
        const widthVideoElement = document.querySelector(".slide");
        let widthVideo = parseInt(widthVideoElement.style.width.slice(0, 2)) * window.innerWidth / 100
        const widthCarrousel = document.querySelectorAll(".carrousel__cards")[id].clientWidth;
        const widthVideoAll = videos.length * widthVideo
        if (widthCarrousel > window.innerWidth) {

            if (-widthVideoAll < widthCarrousel && moveX > (-window.innerWidth)) {
                let scroll = (moveX - window.innerWidth) + widthVideo * 2;
                setMoveX(scroll)
            }
        }
    }

    function next() {

        const widthVideoElement = document.querySelector(".slide");
        let widthVideo = parseInt(widthVideoElement.style.width.slice(0, 2)) * window.innerWidth / 100

        if (moveX < 0) {
            let scroll = (moveX + window.innerWidth) - widthVideo * 2;
            setMoveX(scroll)
        }
    }

    return (

        <div className="carrousel__slide" >
            <div className="carrousel__info" >
                <h2 style={style}>{name}</h2>
                <span>{description}</span>
            </div>

            <MdKeyboardArrowLeft className="left" color={color} id={id}

                onClick={() => prev(id)}
            // onClick={(event) => {
            //     let count = 1;
            //     let element = document.querySelectorAll(".carrousel__cards")[event.target.id];

            //     const widthElement = element.clientWidth
            //     let widthScreen = window.innerWidth
            //     let scroll = (moveX - widthScreen) + 500

            //     if (moveX > (-widthElement + widthScreen)) {
            //         setMoveX(scroll);
            //         element.style.transform = `translateX(${scroll}px)`
            //     }
            //     setcliques(count++)

            //     console.log(moveX, -widthElement)

            // }}
            />

            <MdKeyboardArrowRight className="right" color={color} id={id} onClick={next}
            // onClick={(event) => {

            //     let element = document.querySelectorAll(".carrousel__cards")[event.target.id];
            //     let widthScreen = window.innerWidth
            //     let scroll = (moveX + widthScreen) - 500

            //     if (moveX < 0) {
            //         setMoveX(scroll);
            //         element.style.transform = `translateX(${scroll}px)`
            //     } else {
            //         element.style.transform = `translateX(${scroll}px)`
            //     }

            // }}
            />
            <div className="carrousel__cards" style={{ transform: `translateX(${moveX}px)` }}>

                {videos.map(video => (
                    <div key={video} className="video">
                        <ReactPlayer className="slide" width={"20vw"} height={"12vw"} style={{ minWidth: "200px", minHeight: "150px", border: `solid 4px ${color}` }} playsinline playing config={{
                            youtube: {
                                playerVars: {
                                    rel: 0,
                                    fs: 0,
                                },
                            }
                        }} light url={`${baseUrl}${video}`} />
                    </div>
                ))}

            </div>

            {/* {data.map((slide, index) => (
                <div key={slide.id} className="carrousel__slide" >
                    <div className="carrousel__info" >
                        <h2 style={{ backgroundColor: slide.color }}>{slide.name}</h2>
                        <span>{slide.description}</span>
                    </div>

                    <MdKeyboardArrowLeft className="left" color={slide.color} id={index}

                        onClick={prev}
                    // onClick={(event) => {
                    //     let count = 1;
                    //     let element = document.querySelectorAll(".carrousel__cards")[event.target.id];

                    //     const widthElement = element.clientWidth
                    //     let widthScreen = window.innerWidth
                    //     let scroll = (moveX - widthScreen) + 500

                    //     if (moveX > (-widthElement + widthScreen)) {
                    //         setMoveX(scroll);
                    //         element.style.transform = `translateX(${scroll}px)`
                    //     }
                    //     setcliques(count++)

                    //     console.log(moveX, -widthElement)

                    // }}
                    />

                    <MdKeyboardArrowRight className="right" color={slide.color} id={index}
                    // onClick={(event) => {

                    //     let element = document.querySelectorAll(".carrousel__cards")[event.target.id];
                    //     let widthScreen = window.innerWidth
                    //     let scroll = (moveX + widthScreen) - 500

                    //     if (moveX < 0) {
                    //         setMoveX(scroll);
                    //         element.style.transform = `translateX(${scroll}px)`
                    //     } else {
                    //         element.style.transform = `translateX(${scroll}px)`
                    //     }

                    // }}
                    />
                    <div className="carrousel__cards" style={{ transform: `translateX(${moveX}px)` }}>

                        {slide.videos.map(video => (
                            <div key={video} className="video">
                                <ReactPlayer className="slide" width={"20vw"} height={"12vw"} style={{ minWidth: "250px", minHeight: "170px", border: `solid 4px ${slide.color}` }} playsinline playing config={{
                                    youtube: {
                                        playerVars: {
                                            rel: 0,
                                            fs: 0,
                                        },
                                    }
                                }} light url={`${baseUrl}${video}`} />
                            </div>
                        ))}

                    </div>
                </div>
            ))} */}
        </div>
    )
}
