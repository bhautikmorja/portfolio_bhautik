'use client'
export default function About() {
  return (
    <>
      <article className="about active" data-page="about">
        <header>
          <h2 className="h2 article-title">About me</h2>
        </header>
        <section className="about-text">
          <p>
            Hi, I'm Bhautik Morja, a Full Stack Developer with 1.5+ years of experience in building web applications. I specialize in backend development with Express.js, Node.js, and NestJS, while using Next.js and React for the frontend. I’m proficient in MongoDB and MySQL for database management, focusing on creating scalable APIs and seamless user experiences.
          </p>
          <p>
            My experience as a Full Stack Developer is driven by a commitment to building high-quality, scalable web applications. I specialize in crafting efficient APIs using Node.js, Express.js, and NestJS for the backend, while delivering seamless user interfaces with Next.js and React on the frontend. With expertise in both MongoDB and MySQL, I integrate complex functionalities to create responsive and user-friendly applications, all while maintaining clean and efficient code.
          </p>
        </section>
        <section className="service">
          <h3 className="h3 service-title">What i'm doing</h3>
          <ul className="service-list">
            <li className="service-item">
              <div className="service-icon-box">
                <img
                  src="/images/web-development.png"
                  alt="mobile app icon"
                  width={40}
                />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">
                  Web Development
                </h4>
                <p className="service-item-text">
                  Professional development of Full Stack Website.
                </p>
              </div>
            </li>
            <li className="service-item">
              <div className="service-icon-box">
                <img
                  src="/images/web-design.png"
                  alt="mobile app icon"
                  width={40}
                />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">
                  Web design
                </h4>
                <p className="service-item-text">
                  The most modern and high-quality design made at a professional level.
                </p>
              </div>
            </li>
            <li className="service-item">
              <div className="service-icon-box">
                <img
                  src="/images/mobile-apps.png"
                  alt="mobile app icon"
                  width={40}
                />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">
                  Mobile apps
                </h4>
                <p className="service-item-text">
                  Professional development of applications for iOS and Android.
                </p>
              </div>
            </li>
            <li className="service-item">
              <div className="service-icon-box">
                <img
                  src="/images/backend.png"
                  alt="mobile app icon"
                  width={40}
                />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">
                  Back-end Web Development
                </h4>
                <p className="service-item-text">
                  Professional development of APIs and Database Management.
                </p>
              </div>
            </li>
          </ul>
        </section>
        <section className="askill">
          <h3 className="h3 service-title">Skills</h3>
          <ol className="askill-list">
            <li className="askill-item">Next.js</li>
            <li className="askill-item">NestJS</li>
            <li className="askill-item">React Native</li>
            <li className="askill-item">Node.js</li>
            <li className="askill-item">ReactJS</li>
            <li className="askill-item">Express.js</li>
            <li className="askill-item">Javascript</li>
            <li className="askill-item">Typescript</li>
            <li className="askill-item">MongoDB</li>
            <li className="askill-item">mysql</li>
            <li className="askill-item">Third Party Payment Integration</li>
            <li className="askill-item">Database Management</li>
          </ol>
        </section>
        <div className="modal-container" data-modal-container="">
          <div className="overlay" data-overlay="" />
          <section className="testimonials-modal">
            <button className="modal-close-btn" data-modal-close-btn="">
              <ion-icon name="close-outline" />
            </button>
            <div className="modal-img-wrapper">
              <figure className="modal-avatar-box">
                <img
                  src="/images/avatar-1.png"
                  alt="Daniel lewis"
                  width={80}
                  data-modal-img=""
                />
              </figure>
              <img src="/images/icon-quote.svg" alt="quote icon" />
            </div>
            <div className="modal-content">
              <h4 className="h3 modal-title" data-modal-title="">
                Daniel lewis
              </h4>
              <time dateTime="2021-06-14">14 June, 2021</time>
              <div data-modal-text="">
                <p>
                  Richard was hired to create a corporate identity. We were very
                  pleased with the work done. She has a lot of experience and is
                  very concerned about the needs of client. Lorem ipsum dolor sit
                  amet, ullamcous cididt consectetur adipiscing elit, seds do et
                  eiusmod tempor incididunt ut laborels dolore magnarels alia.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
