export default function Contact() {
    return (
        <>
            <article className="contact active" data-page="contact">
                <header>
                    <h2 className="h2 article-title">Contact</h2>
                </header>
                <section className="mapbox" data-mapbox="">
                    <figure>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29752.372764681306!2d72.8096356123666!3d21.230000803547757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04eeb5c1077c1%3A0xf3db03f8cc74c359!2sKatargam%2C%20Surat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1702894681783!5m2!1sen!2sin"
                            width={400}
                            height={300}
                            loading="lazy"
                        />
                    </figure>
                </section>
                <section className="contact-form">
                    <h3 className="h3 form-title">Contact Form</h3>
                    <form action="/" id="form" method="post" className="form" data-form="">
                        <div className="input-wrapper">
                            <input
                                type="text"
                                id="fullname"
                                name="fullname"
                                className="form-input"
                                placeholder="Full name"
                                required=""
                                data-form-input=""
                            />
                            <input
                                type="email"
                                name="email"
                                className="form-input"
                                placeholder="Email address"
                                required=""
                                data-form-input=""
                            />
                        </div>
                        <textarea
                            type="text"
                            name="message"
                            className="form-input"
                            placeholder="Your Message"
                            required=""
                            data-form-input=""
                            defaultValue={""}
                        />
                        <button
                            className="form-btn"
                            type="submit"
                            disabled=""
                            data-form-btn=""
                        >
                            <ion-icon name="paper-plane" />
                            <span>Send Message</span>
                        </button>
                    </form>
                </section>
            </article>
        </>
    )
}