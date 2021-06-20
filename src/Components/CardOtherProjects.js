const CardOtherProjects = ({ project: { title, description, tecnology, gitHub, link } }) => {

    return (
        <article>
            <div>
                <i className="far fa-folder"></i>
                <i class="fas fa-external-link-alt"></i>

            </div>
            <h3>{title}</h3>

        </article>
    )
}

export default CardOtherProjects