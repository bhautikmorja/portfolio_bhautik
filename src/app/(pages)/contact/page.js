'use client'
import Loader from "@/components/Loader"
import { chk_email, validate_string } from "@/utils/common"
import { fetchApi } from "@/utils/frontend"
import { useState } from "react"
import toast from "react-hot-toast"

export default function Contact() {
    const [contactData, setContactData] = useState({
        name: "",
        email: "",
        message: "",
    })
    const [loader, setLoader] = useState(false)

    const submitForm = async () => {
        toast.dismiss()
        if (!loader) {
            setLoader(true)
            try {
                validate_string(contactData.name, "name")
                validate_string(contactData.email, "email")
                chk_email(contactData.email)
                validate_string(contactData.message, "message")
            } catch (error) {
                toast.error(error)
                return
            }
            const params = JSON.stringify(contactData)
            const response = await fetchApi("/contact", params, "POST")
            setLoader(false)
            if (response.statusCode === 200) {
                toast.success(response.data.message)
                setContactData({
                    name: "",
                    email: "",
                    message: "",
                })
            } else {
                toast.error(response.data.message)
            }
        }
    }


    return (
        <>
            <article className="contact active" data-page="contact">
                <header>
                    <h2 className="h2 article-title">Contact</h2>
                </header>
                <section className="mapbox" data-mapbox>
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
                    <div className="input-wrapper">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="form-input"
                            placeholder="Name"
                            onKeyUp={(e) => e.keyCode == 13 && submitForm()}
                            value={contactData.name}
                            onChange={(e) => {
                                setContactData({
                                    ...contactData,
                                    name: e.target.value,
                                })
                            }}
                        />
                        <input
                            type="text"
                            name="email"
                            className="form-input"
                            placeholder="Email"
                            onKeyUp={(e) => e.keyCode == 13 && submitForm()}
                            value={contactData.email}
                            onChange={(e) => {
                                setContactData({
                                    ...contactData,
                                    email: e.target.value,
                                })
                            }}
                        />
                    </div>
                    <textarea
                        type="text"
                        name="message"
                        className="form-input"
                        placeholder="Message"
                        onKeyUp={(e) => e.keyCode == 13 && submitForm()}
                        value={contactData.message}
                        onChange={(e) => {
                            setContactData({
                                ...contactData,
                                message: e.target.value,
                            })
                        }}
                    />
                    <button
                        className="form-btn"
                        onClick={submitForm}
                    >
                        {loader ? <Loader /> : ''}
                        <ion-icon name="paper-plane" />
                        Send Message
                    </button>
                </section>
            </article>
        </>
    )
}