export default function Educative() {
    return (
        <>
            <article className="experience active" data-page="experience">
                <header>
                    <h2 className="h2 article-title">Educative</h2>
                </header>
                <div className="portfolio-details-slider swiper">
                    <div className="swiper-wrapper align-items-center">
                        <div className="swiper-slide">
                            <img
                                src="../images/portfolio/educative/2.png"
                                alt=""
                                className="img-fluid image-custom-size"
                            />
                        </div>
                        <div className="swiper-slide">
                            <img
                                src="../images/portfolio/educative/1.png"
                                alt=""
                                className="img-fluid image-custom-size"
                            />
                        </div>
                        <div className="swiper-slide">
                            <img
                                src="../images/portfolio/educative/3.png"
                                alt=""
                                className="img-fluid image-custom-size"
                            />
                        </div>
                    </div>
                    <div className="swiper-pagination" />
                </div>
                <div className="col-lg-4 portfolio-info">
                    <ul>
                        <div className="row">
                            &nbsp;
                            <li className="text-white">
                                <h4>
                                    <b>📖 Overview</b>
                                </h4>
                                🔹 education platform offers a powerful blend of learning tools
                                for developers. Easily post and take quizzes, watch in-depth video
                                tutorials, and join live sessions to enhance your coding skills
                                and knowledge. Engage in a dynamic and interactive learning
                                environment tailored for developers.
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