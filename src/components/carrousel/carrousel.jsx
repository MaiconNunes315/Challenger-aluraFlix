import "./carrousel.css"
import { useState, useEffect, useRef, useContext } from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import Banner from "../banner/banner";
import ModalVideo from "../modal/modal";
import DataContext from "../../contexts/dataContext";



export default function Carrousel() {
    const baseUrl = "https://youtube.com/embed/"
    const baseUrlImg = "https://img.youtube.com/vi/"
    const data = useContext(DataContext)
    const [handleId, setHandleId] = useState([]);
    const [filterData, setFilterData] = useState([])
    const [numberRandom, setNumberRandom] = useState()
    const carousel = useRef(null)

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

    const handleLeftClick = (index) => {
        const element = carousel.current.children[index].lastChild
        const moveElement = element.offsetWidth;
        element.scrollBy(-moveElement, 0)
    };

    const handleRightClick = (index) => {
        const element = carousel.current.children[index].lastChild
        const moveElement = element.offsetWidth;
        element.scrollBy(moveElement, 0)
    };


    return (


        <>

            <Banner color={filterData.color} background={filterData.background} title={filterData.category} description={filterData.descriptionCategory} video={filterData.videos} />
            <ModalVideo open={open} onClose={handleClose} videos={handleId} baseUrl={baseUrl} slide={data} />

            <div onLoad={renderBanner} className="carrousel" ref={carousel}>
                {data.map((slide, index) => (

                    slide.videos.length > 0 && (
                        <div key={slide.id} className="carrousel__slide"  >
                            <div className="carrousel__info" >
                                <h2 style={{ backgroundColor: slide.color }}>{slide.category}</h2>
                                <span>{slide.descriptionCategory}</span>
                            </div>

                            <MdKeyboardArrowLeft className="left" color={slide.color} id={index}
                                onClick={() => handleLeftClick(index)}
                            />

                            <MdKeyboardArrowRight className="right" color={slide.color} id={index}
                                onClick={() => handleRightClick(index)}
                            />

                            < div className="carrousel__cards" >

                                {
                                    slide.videos.map(({ idVideo }) => (

                                        <div key={idVideo} className="video" style={{ border: `solid 4px ${slide.color}` }}>
                                            <img className="imgVideo" onClick={() => handleOpen(idVideo)} src={`${baseUrlImg}${idVideo}/sddefault.jpg`} alt="imagem do video" />
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
