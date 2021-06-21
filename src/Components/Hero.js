import { useRef, useEffect, useState } from "react";
import { gsap } from 'gsap'

const Hero = () => {

    const title = useRef()
    const containerHero = useRef()

    useEffect(() => {
        gsap.from(title.current, {

            duration: 1.5,
            rotate: 360,
            repeat: 1,
            yoyoEase: true,
            ease: "elastic",

        })
        gsap.from(containerHero.current, {

            duration: 1.5,
            rotate: 360,
            repeat: 1,
            yoyoEase: true,
            ease: "elastic",
        })
    }, [])

    return (
        <section className="containerHero">
            <h1 className="titleHero" ref={title}  >
                Agustin Garcia.
            </h1>
            <div ref={containerHero}>
                <h2 className="subTitle">I build things for the web.</h2>
                <p className="textHero">
                    I'm a Boston-based software engineer who specializes in building (and occasionally designing) exceptional digital experiences. Currently, I'm an engineer at Upstatement focused on building accessible, human-centered products.
                </p>
                <button className="btnHero">
                    Get in touch
                </button>
            </div>
        </section>
    )
}

export default Hero