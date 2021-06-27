import { Tab, Nav, Col, Row } from "react-bootstrap"


const TabJobs = () => {



    const jobs = [
        {
            title: 'Proyectos Full Stack MERN',
            descripction: 'En el bootcamp de mindHub adquire los conocimientos del stack mern con los cuales desarrole los siguientes proyectos:',
            item: [
                { name: 'myTinerary', id: '#mytinerary', description: '' },
                { name: 'myTinerary App', id: '#mytineraryapp', description: '' },
                { name: 'Explore', id: '#explore', description: '' },
                { name: 'Explore App', id: '#exploreapp', description: '' },
                { name: 'MindTrainer', id: '#mindtrainer', description: '' },
            ],
            key: 'first',
            date: 'Febrero-2021'
        },
        {
            title: 'Creación de páginas web con WordPress',
            descripction: 'En mi experiencia con este CRM, realice distintos proyectos tanto personales como para clientes desde ecommerces, academias online, lading page, blogs, coorporativos entre otros. Algunos de mis ultimos proyectos',
            item: [
                { name: 'Spanish Learn and Travel', description: 'Academia online', id: 'https://spanishlearnandtravel.com/' },
                { name: 'Academia Claxon learning', description: 'Academia online', id: 'https://claxonlearning.com/' },
                { name: 'Gestión humana', description: 'Academia online', id: 'https://ghcapacitacion.com/cursos/' },
            ],
            key: 'second',
            date: 'May- 2018',
        },
        {
            title: 'Seo',
            descripction: 'He realizado en varias web para clientes optimización web/blog, keywords research y estrategia decontenido',
            item: [],
            key: 'three',
            date: 'May- 2018',
        },


    ]

    const jobItem = (items) => {

        return items.map((item, index) => {
            return (
                <li key={index}>
                    <span className="containerItemsExperience">
                        <a href={item.id}>{item.name}</a>
                        {/*   <p className="titleDescripcionTabJob">{item.description}</p> */}
                    </span>
                </li>
            )
        })
    }

    return (
        <Tab.Container id="left-tabs" defaultActiveKey="first">
            <Row>
                <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link class="btnTabsJobs" eventKey="first">Experiencia en proyectos</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Desarrollador Wordpress</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="three">Seo</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={9}>
                    <Tab.Content>
                        {jobs.map(job => {
                            return (
                                <Tab.Pane eventKey={job.key}>
                                    <div className='containerJobDescription'>
                                        <h2>{job.title}</h2>
                                        <p className="jobDate">{job.date}</p>
                                        <p className="jobDescription"> {job.descripction}</p>
                                        <ul> {jobItem(job.item)}</ul>
                                    </div>
                                </Tab.Pane>
                            )
                        })}


                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    )
}

export default TabJobs