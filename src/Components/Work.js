import TabJobs from "./TabJobs"

const Work = () => {

    return (
        <section className="jobs">
            <div className="titleSection">
                <div className="titleandNumber">
                    <span >.02</span>
                    <p>Where I’ve Worked</p>
                </div>
                <div></div>
            </div>
            <div className="containerTabs">
                <TabJobs />
            </div>
        </section>
    )
}
export default Work