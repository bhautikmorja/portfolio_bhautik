import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

export default function WeValetModalContent({ onClose }) {
    return (
        <>
            <header className="modal-header">
                <h2 className="h2 text-white">WeValet</h2>
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
                            src="/images/portfolio/wevalet/super.png"
                            alt="WeValet Project"
                            className="img-fluid image-custom-size"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="/images/portfolio/wevalet/main.png"
                            alt="WeValet Project"
                            className="img-fluid image-custom-size"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="/images/portfolio/wevalet/main2.png"
                            alt="WeValet Project"
                            className="img-fluid image-custom-size"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="/images/portfolio/wevalet/main3.png"
                            alt="WeValet Project"
                            className="img-fluid image-custom-size"
                        />
                    </SwiperSlide>
                </Swiper>

                <div className="portfolio-info">
                    <ul>
                        <li className="modal-mt text-white">
                            <h4 className="modal-margin"><b>🚗 Overview</b></h4>
                            🔹 WeValet is an advanced valet parking platform designed to streamline vehicle drop-off, tracking, and retrieval. Users can park their cars, upload images from all sides for security, and receive a digital valet ticket. When needed, they can request their car via the platform, ensuring a smooth and hassle-free experience. The system integrates QR codes for easy scanning and tracking, making valet parking more efficient and secure.
                            <br />
                            <div className="modal-margin-cust">
                                <h4><b>💻 Tech stack & More</b></h4>
                                ✅ React.js with Javascript for a dynamic and interactive UI<br />
                                ✅ Node.js with Express.js for a scalable and efficient backend<br />
                                ✅ MongoDB for flexible and fast data management<br />
                                ✅ JWT for secure authentication and authorization<br />
                                ✅ Multer for handling car image uploads<br />
                                ✅ AWS for scalable hosting and storage solutions<br />
                                ✅ Hostinger for web page deployment<br />
                                ✅ QRCode for generating digital valet tickets<br />
                                ✅ Flutter for a seamless mobile app experience<br />
                            </div>
                        </li>
                    </ul>
                </div>

            </section>
        </>
    );
}
