import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

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
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    modules={[EffectCoverflow, Pagination, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img
                            src="/images/portfolio/educative/2.png"
                            alt="Educative Project"
                            className="img-fluid image-custom-size"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="/images/portfolio/educative/1.png"
                            alt="Educative Project"
                            className="img-fluid image-custom-size"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="/images/portfolio/educative/3.png"
                            alt="Educative Project"
                            className="img-fluid image-custom-size"
                        />
                    </SwiperSlide>
                </Swiper>

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
