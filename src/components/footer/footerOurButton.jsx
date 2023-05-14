import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import { Button } from '../button/button';
import { Footer } from './footer';
import { useState } from "react"

import logo from '../../assets/logo.png'
import styled from 'styled-components';

export default function FooterOurButton() {
    const location = useLocation();
    const [widthScreen, setWidthScreen] = useState(window.innerWidth)

    const styleButton = {
        height: "54px",
        width: "100%",
        position: "fixed",
        bottom: "0"
    }

    return (
        <div onResize={() => {
            setWidthScreen(window.innerWidth)

        }}>
            {location.pathname === "/" && widthScreen < 800 ?
                (<Link to="add-new-videos">
                    <Button style={styleButton} $blue>
                        Novo video
                    </Button>
                </Link>) :
                (<Footer>
                    <img src={logo} alt=' logo aluraflix' />
                </Footer>)
            }


        </div>
    )
}
