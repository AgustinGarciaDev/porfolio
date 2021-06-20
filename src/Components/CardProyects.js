const CardProjects = ({ project: { title, description, tecnology } }) => {

    return (
        <article className='cardProject'>
            <div className="coverProjects" style={{ backgroundImage: ` url('https://user-images.githubusercontent.com/66225450/122659237-6361b700-d14c-11eb-9b99-648d4189bf97.png')` }}>
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
            </div>

        </article>
    )
}

export default CardProjects