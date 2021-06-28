const Contact = () => {
    return (
        <section id="contact" className="contacto">
            <div className="titleSectionContact">
                <div className="titleandNumberContact">
                    <span >.04</span>
                    <p>¿Cuál es el siguiente paso?</p>
                </div>
            </div>
            <div className="containerTextContact">
                <h3>Contactame</h3>
                <p>
                    En este momento estoy buscando nuevas oportunidades y desafíos
                </p>
                <a href="mailto:agustinchinchilla16@gmail.com">Contacto!</a>
                <div className='containerIconsFooter'>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/agust%C3%ADngarc%C3%ADa/"><i className="fab fa-linkedin "></i></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/AgustinGarciaDev"><i className="fab fa-github-square"></i></a>
                </div>
            </div>

        </section>
    )
}

export default Contact