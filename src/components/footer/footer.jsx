import React from 'react'
import { FooterStyled } from './footerStyled'
import logo from '../../assets/logo.png'

export default function Footer() {
    return (
        <FooterStyled>
            <img src={logo} alt=' logo' />
        </FooterStyled>
    )
}
