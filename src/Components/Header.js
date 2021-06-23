import { useRef, useEffect } from "react";
import { gsap } from 'gsap'
import { Link } from "react-router-dom";
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

        <Navbar ref={header} className="fixed-top " collapseOnSelect expand="lg">
            <Navbar.Brand href="#home">
                <img className="logo" src="https://user-images.githubusercontent.com/66225450/122686877-f3097300-d1e9-11eb-93c2-1c18710706e8.png" alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#Inicio">Inicio</Nav.Link>
                    <Nav.Link href="#about">Acerca de mi</Nav.Link>
                    <Nav.Link href="#experience">Experiencia</Nav.Link>
                    <Nav.Link href="#projects">Proyectos</Nav.Link>
                    <Nav.Link href="#contact">Contacto</Nav.Link>
                </Nav>
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