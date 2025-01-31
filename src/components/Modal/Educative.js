export default function EducativetModalContent({ onClose }) {
    return (
        <>
            <header className="modal-header">
                <h2 className="h2 text-white">Educative</h2>
                <button className="close-btn text-white" onClick={onClose}>
                    &times;
                </button>
            </header>
            <section className="modal-body">
                <div className="portfolio-details-slider swiper">
                    <div className="swiper-wrapper align-items-center">
                        <div className="swiper-slide">
                            <img
                                src="../images/portfolio/educative/2.png"
                                alt="Educative Project"
                                className="img-fluid image-custom-size"
                            />
                        </div>
                        <div className="swiper-slide">
                            <img
                                src="../images/portfolio/educative/1.png"
                                alt="Educative Project"
                                className="img-fluid image-custom-size"
                            />
                        </div>
                        <div className="swiper-slide">
                            <img
                                src="../images/portfolio/educative/3.png"
                                alt="Educative Project"
                                className="img-fluid image-custom-size"
                            />
                        </div>
                    </div>
                    <div className="swiper-pagination" />
                </div>
                <div className="portfolio-info">
                    <ul>
                        <li className="modal-mt text-white">
                            <h4 className="modal-margin"><b>📖 Overview</b></h4>
                            🔹 Educative is an educational platform that offers a powerful blend of learning tools for developers. Easily post and take quizzes, watch in-depth video tutorials, and join live sessions to enhance your coding skills and knowledge. Engage in a dynamic and interactive learning environment tailored for developers.
                            <br />
                            <div className="modal-margin-cust">
                                <h4><b>💻 Tech stack & More</b></h4>
                                ✅ Typescript with React.js for dynamic and interactive UI<br />
                                ✅ Node.js with Nestjs for backend development<br />
                                ✅ mySQL for database management<br />
                                ✅ JWT for secure authentication<br />
                                ✅ AWS for scalable hosting<br />
                                ✅ Git for version control and collaboration
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
}
