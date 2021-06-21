import { Tab, Nav, Col, Row } from "react-bootstrap"


const TabJobs = () => {



    const jobs = [
        {
            title: 'Proyectos Full stack',
            descripction: '  Collaborated with a small team of student designers to spearhead a new brand and design system for Scout’s inaugural student-led design conference at Northeastern',
            item: [{ name: 'myTinerary', description: 'este proyecto' }],
            key: 'first',
            date: 'May- 2019'
        },
        {
            title: 'Wordpress',
            descripction: '  Collaborated with a small team of student designers to spearhead a new brand and design system for Scout’s inaugural student-led design conference at Northeastern',
            item: [{ name: 'myTinerary', description: 'este proyecto' }],
            key: 'second',
            date: 'May- 2019',
        },
        {
            title: 'Wordpress',
            descripction: '  Collaborated with a small team of student designers to spearhead a new brand and design system for Scout’s inaugural student-led design conference at Northeastern',
            item: [{ name: 'myTinerary', description: 'este proyecto' }],
            key: 'three',
            date: 'May- 2019',
        },


    ]

    const jobItem = (items) => {

        console.log(items)
        return items.map((item, index) => {
            return (
                <li>
                    <span className="containerItemsExperience">
                        <a href="">{item.name}:</a>
                        <p>{item.description}</p>
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
                            <Nav.Link eventKey="three">SEO web</Nav.Link>
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