export default function Finright() {
    return (
        <>
            <article className="experience active" data-page="experience">
                <header>
                    <h2 className="h2 article-title">FinRight</h2>
                </header>
                <section className="timeline">
                    <div className="portfolio-details-slider swiper">
                        <div className="swiper-wrapper align-items-center">
                            <div className="swiper-slide">
                                <img
                                    src="../images/portfolio/finright/project-1.PNG"
                                    alt=""
                                    className="img-fluid image-custom-size"
                                />
                            </div>
                            {/* <div class="swiper-slide">     <img src="../images/portfolio/invoicemaker/2.jpeg" alt="" class="img-fluid">       </div> */}
                        </div>
                        <div className="swiper-pagination" />
                    </div>
                    <div className="portfolio-info">
                        <ul>
                            <div className="row">
                                {/* Web Link Here */}
                                <li>
                                    <div className="row">
                                        <a href="https://www.finright.in/" target="_blank">
                                            <img
                                                src="https://img.shields.io/static/v1?label=Website &message=Check &color=blue"
                                                alt="APK"
                                            />
                                        </a>
                                    </div>
                                </li>
                                &nbsp;
                                <li className="text-white">
                                    <h4>
                                        <b>📖 Overview</b>
                                    </h4>
                                    🔹 FinRight is your go-to platform for all banking needs,
                                    providing expert assistance with loans, provident funds, and
                                    insurance services. Simplify your financial management and make
                                    informed decisions with FinRight by your side.
                                    <br />
                                    &nbsp;
                                    <h4>
                                        <b />
                                    </h4>
                                    <h4>
                                        <b>💻 Tech stack &amp; More</b>
                                    </h4>
                                    ✅ JavaScript with React.js for dynamic and interactive UI
                                    <br />
                                    ✅ Node.js with Nestjs for backend development
                                    <br />
                                    ✅ mySQL for database management
                                    <br />
                                    ✅ JWT for secure authentication
                                    <br />
                                    ✅ AWS for scalable hosting
                                    <br />
                                    ✅ Git for version control and collaboration
                                    <br />✅ PhonePe Payment Gateway
                                </li>
                            </div>
                        </ul>
                    </div>
                </section>
            </article>
        </>
    )
}