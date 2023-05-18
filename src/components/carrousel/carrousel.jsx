import "./carrousel.css"
import { useState, useEffect } from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import Banner from "../banner/banner";
import ModalVideo from "../modal/modal";
import { useGetData } from "../../hook/useDatas";


export default function Carrousel() {
    const data = useGetData()
    const baseUrl = "https://youtube.com/embed/"
    const baseUrlImg = "https://img.youtube.com/vi/"

    const [moveX, setMoveX] = useState(0);
    const [handleId, setHandleId] = useState([]);
    const [filterData, setFilterData] = useState([])
    const [videoFilter, setVideoFilter] = useState()
    const [numberRandom, setNumberRandom] = useState()

    useEffect(() => {
        setNumberRandom(Math.ceil(Math.random() * data.length))
    }, [renderBanner])

    function renderBanner() {
        setFilterData(data.find(video => video.id === numberRandom))
    }

    const [open, setOpen] = useState(false);

    const handleOpen = (id) => {
        const filterData = data.map(({ videos }, index) => {
            return videos.find(({ idVideo }) => idVideo === id)
        })

        const filterVideo = filterData.find(idVideo => idVideo != undefined)

        setOpen(true);
        setHandleId(filterVideo)

    }
    const handleClose = () => setOpen(false);


    return (
        <>

            <Banner color={filterData.color} background={filterData.background} title={filterData.category} description={filterData.descriptionCategory} video={filterData.videos} />
            <ModalVideo open={open} onClose={handleClose} videos={handleId} baseUrl={baseUrl} slide={data} />
            <div onLoad={renderBanner} className="carrousel">
                {data.map((slide, index) => (

                    slide.videos.length > 0 && (
                        <div key={slide.id} className="carrousel__slide" >
                            <div className="carrousel__info" >
                                <h2 style={{ backgroundColor: slide.color }}>{slide.category}</h2>
                                <span>{slide.descriptionCategory}</span>
                            </div>

                            <MdKeyboardArrowLeft className="left" color={slide.color} id={index}
                                onClick={() => {
                                    const widthVideoElement = document.querySelector(".slide");
                                    let widthVideo = parseInt(widthVideoElement.style.width.slice(0, 2)) * window.innerWidth / 100
                                    const carrousel = document.querySelectorAll(".carrousel__cards")[index];
                                    const widthVideoAll = slide.videos.length * widthVideo


                                    if (carrousel.clientWidth > window.innerWidth) {

                                        if (-widthVideoAll > -carrousel.clientWidth && moveX > (-window.innerWidth)) {
                                            let scroll = (moveX - window.innerWidth) + widthVideo * 2;
                                            carrousel.style.transform = `translateX(${scroll}px)`
                                            setMoveX(scroll)
                                        }
                                    }


                                }}

                            />

                            <MdKeyboardArrowRight className="right" color={slide.color} id={index}
                                onClick={() => {

                                    const widthVideoElement = document.querySelector(".slide");
                                    let widthVideo = parseInt(widthVideoElement.style.width.slice(0, 2)) * window.innerWidth / 100
                                    const carrousel = document.querySelectorAll(".carrousel__cards")[index];

                                    if (moveX < 0) {
                                        let scroll = (moveX + window.innerWidth) - widthVideo * 2;
                                        carrousel.style.transform = `translateX(${scroll}px)`
                                        setMoveX(scroll)
                                    }
                                }}

                            />
                            < div className="carrousel__cards" >

                                {
                                    slide.videos.map(({ idVideo }) => (

                                        <div key={idVideo} className="video" style={{ border: `solid 4px ${slide.color}` }}>
                                            <img className="slide" onClick={() => handleOpen(idVideo)} src={`${baseUrlImg}${idVideo}/sddefault.jpg`} alt="imagem do video" />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    )


                ))}
            </div>

        </>

    )

}
