import { useState } from "react"

export default function Formulario() {

    const [ contactInfo, setContactInfo ] = useState({
        name: "",
        email: "",
        phoneNumber: "",
    })

    const handleChange = (event: any) => {
        setContactInfo({...contactInfo, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event: any) => {
        event.preventDefault()
        console.log(contactInfo)
        setContactInfo({ name: "", email: "", phoneNumber: "" });
    }

    return (
        <div className="border w-9/12">
            <form onSubmit={handleSubmit}>
                <div>
                    <h3>Contact Form</h3>
                </div>
                <div>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={contactInfo.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={contactInfo.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        type="number"
                        name="phonenumber"
                        placeholder="Phone Number"
                        value={contactInfo.phoneNumber}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <button>Submit Contact</button>
                </div>
            </form>
        </div>
    )
}