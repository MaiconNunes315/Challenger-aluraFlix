import { Link } from "react-router-dom";
import "./header.css";
import logo from '../../assets/logo.png'
import { Button } from "../button/button";

export default function Header() {
    return (
        <header>
            <img src={logo} alt='logo alura flix' />
            <Button>Novo vídeo</Button>
        </header>
    )
}
