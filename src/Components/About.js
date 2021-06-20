
const About = () => {

    return (
        <section className="containerAbout">
            <div className="titleSection">
                <div className="titleandNumber">
                    <span >.01</span>
                    <p>About Me</p>
                </div>
                <div></div>
            </div>
            <article className="containertextAndPhoto">
                <div>
                    <p className="textAbout">
                        Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
                    </p>
                    <p className="textAbout">
                        Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.
                    </p>
                    <p className="textAbout">
                        Here are a few technologies I've been working with recently:
                    </p>
                    <div className="skills">
                        <ul >
                            <li>JavaScript (ES6+)</li>
                            <li>Node</li>
                            <li>React</li>
                            <li>ReactNative</li>
                            <li>JSON</li>
                        </ul>
                        <ul >
                            <li>Mongo DB</li>
                            <li>Redux</li>
                            <li>Express</li>
                            <li>Git</li>
                            <li>GitHub</li>
                        </ul>
                        <ul >
                            <li>Heroku</li>
                            <li>Wordpress</li>
                            <li>SCSS</li>
                            <li>Selenium</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <img className="PhotoProfile" src="https://user-images.githubusercontent.com/66225450/122656714-977cae00-d133-11eb-9eec-d4360bd02c5a.png" alt="la fotito" />
                </div>
            </article>
        </section>
    )
}

export default About