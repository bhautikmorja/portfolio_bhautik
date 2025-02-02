'use client'
import EducativetModalContent from "@/components/Modal/Educative";
import FinRightModalContent from "@/components/Modal/Finright";
import Modal from "@/components/Modal/Modal";
import RebevModalContent from "@/components/Modal/Rebev";
import WevaletModalContent from "@/components/Modal/Wevalet";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Portfolio() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentModal, setCurrentModal] = useState(null);

    useEffect(() => {
        if (isModalOpen) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
        return () => document.body.classList.remove("no-scroll");
    }, [isModalOpen]);

    const openModal = (modalContent) => {
        setCurrentModal(modalContent);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentModal(null);
    };
    return (
        <>
            <article className="portfolio active" data-page="portfolio">
                <header>
                    <h2 className="h2 article-title">Portfolio</h2>
                </header>
                <section className="projects">
                    <div className="filter-select-box">
                        <button className="filter-select" data-select="">
                            <div className="select-value" data-selecct-value="">
                                Select category
                            </div>
                            <div className="select-icon">
                                <ion-icon name="chevron-down" />
                            </div>
                        </button>
                        <ul className="select-list">
                            <li className="select-item">
                                <button data-select-item="">All</button>
                            </li>
                            <li className="select-item">
                                <button data-select-item="">Web design</button>
                            </li>
                            <li className="select-item">
                                <button data-select-item="">Applications</button>
                            </li>
                            <li className="select-item">
                                <button data-select-item="">Web development</button>
                            </li>
                        </ul>
                    </div>
                    <ul className="project-list">
                        <li
                            className="project-item active"
                            data-filter-item
                            data-category="web development"
                        >
                            <button onClick={() => openModal(<FinRightModalContent onClose={closeModal} />)} className="open-modal-btn">
                                <figure className="project-img">
                                    <div className="project-item-icon-box">
                                        <ion-icon name="eye-outline" />
                                    </div>
                                    <img src="/images/portfolio/finright/project-1.PNG" alt="finance" loading="lazy" />
                                </figure>
                                <h3 className="project-title">Finright</h3>
                                <p className="project-category">Banking service app.</p>
                            </button>
                        </li>
                        <li
                            className="project-item active"
                            data-filter-item=""
                            data-category="web development"
                        >
                            <button onClick={() => openModal(<RebevModalContent onClose={closeModal} />)} className="open-modal-btn">
                                <figure className="project-img">
                                    <div className="portfolio-links" />
                                    <div className="project-item-icon-box">
                                        <ion-icon name="eye-outline" />
                                    </div>
                                    <img
                                        src="/images/portfolio/rebev/project-2.png"
                                        alt="resume maker"
                                        loading="lazy"
                                    />
                                </figure>
                                <h3 className="project-title">Rebev</h3>
                                <p className="project-category">Resume Maker Web</p>
                            </button>
                            <a
                                href="/portfolio/rebev.html"
                                data-gallery="portfolioDetailsGallery"
                                data-glightbox="type: external"
                                className="portfolio-details-lightbox"
                                title="Portfolio Details"
                            >
                                <i className="bx bx-file" />
                            </a>
                        </li>
                        <li
                            className="project-item active"
                            data-filter-item=""
                            data-category="web design"
                        >
                            <button onClick={() => openModal(<EducativetModalContent onClose={closeModal} />)} className="open-modal-btn">
                                <figure className="project-img">
                                    <div className="project-item-icon-box">
                                        <ion-icon name="eye-outline" />
                                    </div>
                                    <img
                                        src="/images/portfolio/educative/2.png"
                                        alt="Educative"
                                        loading="lazy"
                                    />
                                </figure>
                                <h3 className="project-title">Educative</h3>
                                <p className="project-category">Developer Larning Plateform</p>
                            </button>
                        </li>
                        <li
                            className="project-item active"
                            data-filter-item=""
                            data-category="web design"
                        >
                            <button onClick={() => openModal(<WevaletModalContent onClose={closeModal} />)} className="open-modal-btn">
                                <figure className="project-img">
                                    <div className="project-item-icon-box">
                                        <ion-icon name="eye-outline" />
                                    </div>
                                    <img
                                        src="/images/portfolio/wevalet/main.png"
                                        alt="Educative"
                                        loading="lazy"
                                    />
                                </figure>
                                <h3 className="project-title">WeValet</h3>
                                <p className="project-category">Smart Valet System</p>
                            </button>
                        </li>
                    </ul>
                </section>
            </article>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                {currentModal}
            </Modal>
        </>
    )
}