import { Tab, Nav, Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const TabJobs = () => {
  const { t } = useTranslation();

  const jobs = [
    {
      title: "iOS Mobile Engineer BraingApps",
      descripction: "text.experience.description.six",
      item: [
        {
          name: "UIKIT",
        },
        {
          name: "SDK Google Firebase/Analytics - SDK Adjust",
        },
        {
          name: "SDK VU(Digital Identity)",
        },
        {
          name: "Storyboard",
        },
        {
          name: "Alamofire",
        },
        {
          name: "MVVM",
        },
        {
          name: "App Store Connect - App center",
        },
        {
          name: "TestFlight",
        },
        {
          name: "Swift Package Manager",
        },
        {
          name: "Git - Github - Gitlab",
        },
      ],
      key: "seven",
      date: "text.experience.date.six",
    },
    {
      title: "iOS Mobile Engineer BraingApps",
      descripction: "text.experience.description.seven",
      item: [
        {
          name: "UIKIT",
        },
        {
          name: "SwiftUI ",
        },
        {
          name: "Objective C",
        },
        {
          name: "SDK Google Firebase/Analytics",
        },
        {
          name: "SDK Paypal",
        },
        {
          name: "Storyboard",
        },
        {
          name: "Sqlite",
        },
        {
          name: "Alamofire",
        },
        {
          name: "MVVM",
        },
        {
          name: "App Store Connect",
        },
        {
          name: "TestFlight",
        },
        {
          name: "Swift Package Manager",
        },
        {
          name: "Git - Github - Gitlab",
        },
      ],
      key: "six",
      date: "text.experience.date.six",
    },
    {
      title: "iOS Mobile Engineer Naranja X",
      descripction: "text.experience.title.description.five",
      item: [ {
        name: "UIKIT",
      },
      {
        name: "Unit Test",
      },
      {
        name: "Alamofire",
      },
      {
        name: "MVVM - VIPER - VIP",
      },
      {
        name: "Cocoapods",
      },
      {
        name: "Git - Github - Gitlab",
      },
    ],
      key: "four",
      date: "text.experience.title.date.five",
    },
    {
      title: "Full Stack Web Developer",
      descripction: "text.experience.title.description.four",
      item: [
        {
          name: "Backend(PHP/Framework Laravel)",
        },
        {
          name: "Frontend(JS/React/Vue/Bootstrap)",
        },
        {
          name: "Test(PHPUnit)",
        },
        {
          name: "CD/CI(Docker/GitHub Integrations)",
        },
      ],
      key: "five",
      date: "text.experience.title.date.four",
    },
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
        { name: "Creation of e-commerce, e-learning, and landing page websites." },
        { name: "Customization of tailor-made themes." },
        { name: "Optimization of website loading speed." },
        { name: "User interface design." },
        { name: "Integration with payment platforms for LATAM (MercadoPago and PayPal) using WooCommerce." },
        { name: "Execution of exploratory testing." },
        { name: "Implementation of SEO using different tools such as Yoast SEO, Google XML Sitemaps, and W3 Total Cache." },
        { name: "Creation of user guides for website usage." }
        ],
      key: "second",
      date: "text.experience.title.date.three",
    },
    {
      title: "text.experience.title.three",
      descripction: "text.experience.title.description.three",
      item: [],
      key: "three",
      date: "text.experience.title.date.three",
    },
  ];

  const jobItem = (items) => {
    return items.map((item, index) => {
      return (
        <li key={index}>
          <span className="containerItemsExperience">
            <a className="linkItem" href={item.id}>
              {item.name}
            </a>
          </span>
        </li>
      );
    });
  };

  return (
    <Tab.Container id="left-tabs" defaultActiveKey="seven">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
          <Nav.Item>
              <Nav.Link className="btnTabsJobs" eventKey="seven">
                iOS Mobile BraingApps
              </Nav.Link>
            </Nav.Item>
          <Nav.Item>
              <Nav.Link className="btnTabsJobs" eventKey="six">
                iOS Mobile Coderio
              </Nav.Link>
          </Nav.Item>
            <Nav.Item>
              <Nav.Link className="btnTabsJobs" eventKey="four">
                iOS Mobile Naranja X
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="btnTabsJobs" eventKey="five">
               Full Stack Web Developer 
              </Nav.Link>
            </Nav.Item>
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
              <Nav.Link eventKey="three">SEO</Nav.Link>
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
                    <p className="jobDate">{t(job.date)}</p>
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
