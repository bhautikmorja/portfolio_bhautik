export default function Rebev() {
    return (
        <>
            <article className="experience active" data-page="experience">
                <header>
                    <h2 className="h2 article-title">Rebev</h2>
                </header>
                <div>
                    <div className="portfolio-details-slider swiper">
                        <div className="swiper-wrapper align-items-center">
                            <div className="swiper-slide">
                                <img
                                    src="../images/portfolio/rebev/project-2.png"
                                    alt=""
                                    className="img-fluid image-custom-size"
                                />
                            </div>
                        </div>
                        <div className="swiper-pagination" />
                    </div>
                </div>
                <div className="portfolio-info">
                    <ul>
                        <div className="row">
                            &nbsp;
                            <li className="text-white">
                                <h4>
                                    <b>📖 Overview</b>
                                </h4>
                                🔹 Resume Creator is a dedicated resume app with a powerful resume
                                builder. You can craft professional resumes effortlessly and
                                manage all your career documents in just one resume app.
                                <br />
                                &nbsp;
                                <h4>
                                    <b />
                                </h4>
                                <h4>
                                    <b>💻 Tech stack &amp; More</b>
                                </h4>
                                ✅ Typescript with React.js for dynamic and interactive UI
                                <br />
                                ✅ Node.js with Nestjs for backend development
                                <br />
                                ✅ mySQL for database management
                                <br />
                                ✅ JWT for secure authentication
                                <br />
                                ✅ AWS for scalable hosting
                                <br />✅ Git for version control and collaboration
                            </li>
                        </div>
                    </ul>
                </div>
            </article>
        </>
    )
}