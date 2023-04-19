import { Link } from "react-router-dom";
import "./header.css";
import logo from '../../assets/logo.png'
import music from "../../assets/music.png"
import { Button } from "../button/button";

export default function Header() {
    return (
        <header>
            <div>
                <img className="logo" src={logo} alt='logo alura flix' />
                <img className="music" src={music} alt="music logo" />

            </div>

            <Button>Novo vídeo</Button>
        </header>
    )
}
