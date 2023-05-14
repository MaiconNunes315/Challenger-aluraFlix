import { Link, useLocation } from "react-router-dom"
import "./header.css";
import logo from '../../assets/logo.png'
import music from "../../assets/music.png"
import { Button } from "../button/button";


export default function Header() {


    return (
        <header>
            <div>
                <Link to="/">
                    <img className="logo" src={logo} alt='logo alura flix' />
                    <img className="music" src={music} alt="music logo" />
                </Link>
            </div>
            <Link

                className={useLocation().pathname === "/add-new-videos" ? "newVideoButton hidden" : "newVideoButton"}
                to="add-new-videos">

                <Button>Novo video</Button>
            </Link>

        </header>
    )
}
