export default function FinRightModalContent({ onClose }) {
    return (
        <>
            <header className="modal-header">
                <h2 className="h2">FinRight</h2>
                <button className="close-btn text-white" onClick={onClose}>
                    &times;
                </button>
            </header>
            <section className="modal-body">
                <div className="portfolio-details-slider swiper">
                    <div className="swiper-wrapper align-items-center">
                        <div className="swiper-slide">
                            <img
                                src="../images/portfolio/finright/project-1.PNG"
                                alt="FinRight Project"
                                className="img-fluid image-custom-size"
                            />
                        </div>
                    </div>
                    <div className="swiper-pagination" />
                </div>
                <div className="portfolio-info">
                    <ul>
                        <li>
                            <a href="https://www.finright.in/" target="_blank" rel="noopener noreferrer">
                                <img
                                    src="https://img.shields.io/static/v1?label=Website&message=Check&color=blue"
                                    alt="Visit Website"
                                />
                            </a>
                        </li>
                        <li className="text-white modal-mt">
                            <h4 className="modal-margin"><b>📖 Overview</b></h4>
                            🔹 FinRight is your go-to platform for all banking needs, providing expert assistance with loans, provident funds, and insurance services.
                            <br />
                            <div className="modal-margin-cust">
                                <h4 ><b>💻 Tech stack & More</b></h4>
                                ✅ JavaScript with React.js<br />
                                ✅ Node.js with Nestjs<br />
                                ✅ mySQL, JWT, AWS, Git<br />
                                ✅ PhonePe Payment Gateway
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
}
