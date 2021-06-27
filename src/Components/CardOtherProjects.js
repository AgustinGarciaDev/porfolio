const CardOtherProjects = ({ project: { title, description, tecnology, gitHub, link } }) => {

    return (
        <article className="otherContainer">
            <div className="containerIcons">
                <a href={link}>
                    <i className="far fa-folder"></i>
                </a>

                <div>
                    <a target="_blank" rel="noopener noreferrer" href={link}>
                        <i className="fas fa-external-link-alt"></i>
                    </a>
                    {gitHub &&
                        <a target="_blank" rel="noopener noreferrer" href={gitHub}>
                            <i className="fab fa-github-alt"></i>
                        </a>
                    }
                </div>
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <ul>
                {tecnology.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </article>
    )
}

export default CardOtherProjects