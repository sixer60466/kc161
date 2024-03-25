function Home() {
    return (
        <div className="d-flex flex-column p-3 bg-body-tertiary" style={{ width: "80%", position: "absolute", right: "0px", top: "0px", bottom: "0px" }}>
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                <svg className="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap" /></svg>
                <span className="fs-4">首頁</span>
            </a>
            <hr />
            <div style={{ width: "70%" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit cum sequi, eligendi voluptates mollitia consectetur molestiae enim. Placeat quas commodi sunt delectus. Omnis repudiandae nostrum rerum ratione ipsum, non odit?
            </div>



        </div>
    )
}

export default Home;