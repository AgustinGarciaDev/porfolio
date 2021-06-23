import { useRef, useEffect } from "react";
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
        <section id="inicio" className="containerHero">
            <h1 className="titleHero" ref={title}  >
                Agustin Garcia.
            </h1>
            <div ref={containerHero}>
                <h2 className="subTitle">Full Stack MERN lover  {`${'<3'}`} </h2>
                <p className="textHero">
                    ¡Bienvenidx! Gracias por interesarte en mi perfil. <br /> Soy un  desarrollador Full Stack MERN & Mobile que reside en la ciudad
                    de Buenos Aires y está en búsqueda de nuevos desafíos. Espero disfrutes los trabajos
                    que he seleccionado para este porfolio.
                </p>
                <a href="#contact" className="btnHero">
                    Ponete en contacto
                </a>
            </div>
        </section>
    )
}

export default Hero