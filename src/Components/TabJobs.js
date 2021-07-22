import { Tab, Nav, Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const TabJobs = () => {
  const { t } = useTranslation();

  const jobs = [
    {
      title: "text.experience.title.one",
      descripction: "text.experience.description.one",
      item: [
        { name: "myTinerary", id: "#mytinerary", description: "" },
        { name: "myTinerary App", id: "#mytineraryapp", description: "" },
        { name: "Explore", id: "#explore", description: "" },
        { name: "Explore App", id: "#exploreapp", description: "" },
        { name: "MindTrainer", id: "#mindtrainer", description: "" },
      ],
      key: "first",
      date: "Febrero-2021",
    },
    {
      title: "text.experience.title.two",
      descripction: "text.experience.description.two",
      item: [
        {
          name: "Spanish Learn and Travel",
          description: "Academia online",
          id: "https://spanishlearnandtravel.com/",
        },
        {
          name: "Academia Claxon learning",
          description: "Academia online",
          id: "https://claxonlearning.com/",
        },
        {
          name: "Gestión humana",
          description: "Academia online",
          id: "https://ghcapacitacion.com/cursos/",
        },
      ],
      key: "second",
      date: "May- 2018",
    },
    {
      title: "text.experience.title.three",
      descripction: "text.experience.title.description.three",
      item: [],
      key: "three",
      date: "May- 2018",
    },
  ];

  const jobItem = (items) => {
    return items.map((item, index) => {
      return (
        <li key={index}>
          <span className="containerItemsExperience">
            <a href={item.id}>{item.name}</a>
            {/*   <p className="titleDescripcionTabJob">{item.description}</p> */}
          </span>
        </li>
      );
    });
  };

  return (
    <Tab.Container id="left-tabs" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link className="btnTabsJobs" eventKey="first">
                {t("text.tab.experience.one")}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">
                {t("text.tab.experience.two")}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="three">Seo</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            {jobs.map((job) => {
              return (
                <Tab.Pane key={job.key} eventKey={job.key}>
                  <div className="containerJobDescription">
                    <h2>{t(job.title)}</h2>
                    <p className="jobDate">{job.date}</p>
                    <p className="jobDescription"> {t(job.descripction)}</p>
                    <ul> {jobItem(job.item)}</ul>
                  </div>
                </Tab.Pane>
              );
            })}
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default TabJobs;
