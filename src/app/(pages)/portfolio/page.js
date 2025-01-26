import Link from "next/link";

export default function Portfolio() {
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
                            data-filter-item=""
                            data-category="web development"
                        >
                            <Link href="/finright" target="”_blank”">
                                <figure className="project-img">
                                    <div className="project-item-icon-box">
                                        <ion-icon name="eye-outline" />
                                    </div>
                                    <img src="/images/project-1.png" alt="finance" loading="lazy" />
                                </figure>
                                <h3 className="project-title">Finright</h3>
                                <p className="project-category">Banking service app.</p>
                            </Link>
                        </li>
                        <li
                            className="project-item active"
                            data-filter-item=""
                            data-category="web development"
                        >
                            <Link href="/rebev" target="”_blank”">
                                {/* Changed href value to "#" */}
                                <figure className="project-img">
                                    <div className="portfolio-links" />
                                    <div className="project-item-icon-box">
                                        <ion-icon name="eye-outline" />
                                    </div>
                                    <img
                                        src="/images/project-2.png"
                                        alt="resume maker"
                                        loading="lazy"
                                    />
                                </figure>
                                <h3 className="project-title">Rebev</h3>
                                <p className="project-category">Resume Maker Web</p>
                            </Link>
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
                            <Link href="/educative" target="”_blank”">
                                <figure className="project-img">
                                    <div className="project-item-icon-box">
                                        <ion-icon name="eye-outline" />
                                    </div>
                                    <img
                                        src="/images/project-3.png"
                                        alt="Educative"
                                        loading="lazy"
                                    />
                                </figure>
                                <h3 className="project-title">Educative</h3>
                                <p className="project-category">Developer Larning Plateform</p>
                            </Link>
                        </li>
                    </ul>
                </section>
            </article>
        </>
    )
}