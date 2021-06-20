import { Tab, Nav, Col, Row } from "react-bootstrap"


const TabJobs = () => {



    const jobs = [
        {
            title: 'Wordpress',
            descripction: '  Collaborated with a small team of student designers to spearhead a new brand and design system for Scout’s inaugural student-led design conference at Northeastern',
            key: 'first'
        },
        {
            title: 'Wordpress',
            descripction: '  Collaborated with a small team of student designers to spearhead a new brand and design system for Scout’s inaugural student-led design conference at Northeastern',
            key: 'second'
        },
        {
            title: 'Wordpress',
            descripction: '  Collaborated with a small team of student designers to spearhead a new brand and design system for Scout’s inaugural student-led design conference at Northeastern',
            key: 'three'
        },
        {
            title: 'Wordpress',
            descripction: '  Collaborated with a small team of student designers to spearhead a new brand and design system for Scout’s inaugural student-led design conference at Northeastern',
            key: 'four'
        },
        {
            title: 'Wordpress',
            descripction: '  Collaborated with a small team of student designers to spearhead a new brand and design system for Scout’s inaugural student-led design conference at Northeastern',
            key: 'five'
        }

    ]

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
                        <Nav.Item>
                            <Nav.Link eventKey="four">Team Leader Amway</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={9}>
                    <Tab.Content>
                        {jobs.map(job => {
                            return (
                                <Tab.Pane eventKey={job.key}>
                                    <div>
                                        <h2>{job.title}</h2>
                                        <p> {job.descripction}</p>
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