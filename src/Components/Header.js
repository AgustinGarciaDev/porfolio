import { useRef, useEffect } from "react";
import { gsap } from 'gsap'
import { Navbar, Nav, } from "react-bootstrap";
const Header = () => {

    const header = useRef(null)

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
                    <Nav.Link href="#Inicio"><span>01.</span>Inicio</Nav.Link>
                    <Nav.Link href="#about"><span>02.</span>Acerca de mi</Nav.Link>
                    <Nav.Link href="#experience"><span>03.</span>Experiencia</Nav.Link>
                    <Nav.Link href="#projects"><span>04.</span>Proyectos</Nav.Link>
                    <Nav.Link href="#contact"><span>05.</span>Contacto</Nav.Link>
                </Nav>
                <a target="_blank" href='/assets/cv-agustinchinchilla.pdf' download rel="noopener noreferrer" className='btnHeaderCv'>Descargar CV</a>
            </Navbar.Collapse>
        </Navbar>

        /*     
            <header ref={header}>
                <div>
               
                </div>
                <nav className="containerItemsNav">
                    <ul>
                        <a heref="#home"><li>Inicio</li></a>
                        <a href="#section"><li>Acerca de mi</li></a>
                        <a href="#experiencie"><li>Experiencia</li></a>
                        <a href="#word"><li>Trabajos</li></a>
                        <a href="#word"><li>Contacto</li></a>
                    </ul>
                    <button>Curriculum</button>
                </nav>
            </header>
        ) */

    )
}

export default Header