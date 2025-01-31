export default function RebevModalContent({ onClose }) {
    return (
        <>
            <header className="modal-header">
                <h2 className="h2">Rebev</h2>
                <button className="close-btn text-white" onClick={onClose}>
                    &times;
                </button>
            </header>
            <section className="modal-body">
                <div className="portfolio-details-slider swiper">
                    <div className="swiper-wrapper align-items-center">
                        <div className="swiper-slide">
                            <img
                                src="../images/portfolio/rebev/project-2.png"
                                alt="Rebev Project"
                                className="img-fluid image-custom-size"
                            />
                        </div>
                    </div>
                    <div className="swiper-pagination" />
                </div>
                <div className="portfolio-info">
                    <ul>
                        <li className="text-white modal-mt">
                            <h4 className="modal-margin"><b>📖 Overview</b></h4>
                            🔹 Rebev is a powerful resume creator app to manage career documents effortlessly.
                            <br />
                            <div className="modal-margin-cust">
                                <h4><b>💻 Tech stack & More</b></h4>
                                ✅ Typescript with React.js<br />
                                ✅ Node.js with Nestjs<br />
                                ✅ mySQL, JWT, AWS, Git
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
}
