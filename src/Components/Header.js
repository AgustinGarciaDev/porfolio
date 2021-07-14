import { useRef, useEffect } from "react";
import { gsap } from 'gsap'
import { Navbar, Nav, } from "react-bootstrap";
import ChangeLenguage from "./ChangeLenguage";
import { useTranslation } from 'react-i18next'
const Header = () => {

    const header = useRef(null)
    const { t } = useTranslation()
    useEffect(() => {
        gsap.from(header.current, {
            x: '-100px',
            duration: 1.5,
            ease: '',


        }, {
            x: '0px'
        })
    }, [])
    return (

        <Navbar ref={header} className="fixed-top  navbar-dark " collapseOnSelect expand="lg">
            <Navbar.Brand href="#home">
                <img className="logo" src="https://user-images.githubusercontent.com/66225450/122686877-f3097300-d1e9-11eb-93c2-1c18710706e8.png" alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#inicio"><span>01.</span>{t('text.header.one')}</Nav.Link>
                    <Nav.Link href="#about"><span>02.</span>{t('text.header.two')}</Nav.Link>
                    <Nav.Link href="#experience"><span>03.</span>{t('text.header.three')}</Nav.Link>
                    <Nav.Link href="#projects"><span>04.</span>{t('text.header.four')}</Nav.Link>
                    <Nav.Link href="#contact"><span>05.</span>{t('text.header.five')}</Nav.Link>
                </Nav>
                <div className="containerBtnAndSwitch">
                    <a target="_blank" href='/assets/cv-agustinchinchillagarcia.pdf' download rel="noopener noreferrer" className='btnHeaderCv'>{t('text.header.six')}</a>
                    <ChangeLenguage />
                </div>
            </Navbar.Collapse>
        </Navbar>

    )
}

export default Header