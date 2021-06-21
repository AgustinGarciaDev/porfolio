const CardProjects = ({ project: { title, description, tecnology, url, linkWeb, gitHubLink } }) => {

    return (
        <article className='cardProject'>
            <div className="coverProjects" style={{ backgroundImage: ` url('${url}')` }}>
                <div className='colorCover'></div>
            </div>
            <div className="containerTextProjects">
                <p>Featured Project</p>
                <h5>{title}</h5>
                <div className="descriptionProject">
                    <p>{description}</p>
                </div>
                <ul>
                    {tecnology.map((item, index) => <li key={index} >{item}</li>)}
                </ul>
                <div>
                    {linkWeb &&
                        <a href={linkWeb}>
                            <i class="fas fa-external-link-alt"></i>
                        </a>
                    }
                    <a href={gitHubLink}>
                        <i class="fab fa-github-alt"></i>
                    </a>
                </div>
            </div>

        </article>
    )
}

export default CardProjects