import { useRef, useEffect, useState } from "react";
import { gsap } from 'gsap'

const Header = () => {

    const header = useRef(null)

    useEffect(() => {
        gsap.from(header.current, {
            x: '-100px',
            duration: 1.5,
            ease: '',
            onComplete: () => {
                gsap.from(header.current, {
                    x: '0px'
                })
            }

        })
    }, [])
    return (
        <header ref={header}>
            <div>
                <img className="logo" src="https://user-images.githubusercontent.com/66225450/122686877-f3097300-d1e9-11eb-93c2-1c18710706e8.png" alt="" />
            </div>
            <nav className="containerItemsNav">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Experiencie</li>
                    <li>Work</li>
                    <li>Contact</li>
                </ul>
                <button>Curriculum</button>
            </nav>
        </header>
    )
}

export default Header