export default function Sidebar() {
    return (
        <>
            <aside className="sidebar" data-sidebar="">
                <div className="sidebar-info">
                    <figure>
                        <img src="/images/my-avatar.png" alt="Bhautik Morja" width={80} />
                    </figure>
                    <div className="info-content">
                        <h1 className="name" title="Bhautik Morja">
                            Bhautik Morja
                        </h1>
                        <p className="title">Full-Stack developer</p>
                    </div>
                    <button className="info_more-btn" data-sidebar-btn>
                        <span>Show Contacts</span>
                        <ion-icon name="chevron-down" />
                    </button>
                </div>
                <div className="sidebar-info_more">
                    <div className="separator" />
                    <ul className="contacts-list">
                        <li className="contact-item">
                            <div className="icon-box">
                                <ion-icon name="mail-outline" />
                            </div>
                            <div className="contact-info">
                                <p className="contact-title">Email</p>
                                <a href="mailto:contact.bhautik@gmail.com" className="contact-link">
                                    contact.bhautik@gmail.com
                                </a>
                            </div>
                        </li>
                        <li className="contact-item">
                            <div className="icon-box">
                                <ion-icon name="phone-portrait-outline" />
                            </div>
                            <div className="contact-info">
                                <p className="contact-title">Phone</p>
                                <a href="tel:+919727477596" className="contact-link">
                                    +91 97274 77596
                                </a>
                            </div>
                        </li>
                        <li className="contact-item">
                            <div className="icon-box">
                                <ion-icon name="location-outline" />
                            </div>
                            <div className="contact-info">
                                <p className="contact-title">Location</p>
                                <address>Gujarat, India</address>
                            </div>
                        </li>
                    </ul>
                    <div className="separator" />
                    <ul className="social-list">
                        <li className="social-item">
                            <a
                                href="https://www.linkedin.com/in/bhautik-morja-09b293170?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                target="_blank"
                                className="social-link"
                            >
                                <ion-icon name="logo-linkedin" />
                            </a>
                        </li>
                        <li className="social-item">
                            <a
                                href="https://www.upwork.com/freelancers/~01ae55eb1bbcbe8059"
                                className="social-link"
                                target="_blank"
                            >
                                <iconify-icon icon="simple-icons:upwork" />
                            </a>
                        </li>
                        <li className="social-item">
                            <a
                                href="https://stackoverflow.com/users/22459872/bhautik-morja"
                                className="social-link"
                                target="_blank"
                            >
                                <ion-icon name="logo-stackoverflow" />
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    )
} 