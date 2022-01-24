import React,{useState} from 'react';

function BookingForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");


    function handleSubmit(event) {
       event.preventDefault();
    }
    console.log(name)
    return (
        <>
            <form className="form bookingForm mt-4">

                     <div className="form-group">
                    <label for="Name">Name</label>
                    <input
                        type="text"
                        name="Name"
                        className="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        tabIndex="1"
                    />
                    </div>
                    <div className="form-group">
                    <label for="email">Email</label>
                    <input
                        name="email"
                        id="email"
                        className="email"
                        tabIndex="2"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    </div>
                    <div className="form-group">
                <label for="Phone">Phone no.</label>
                <input
                    type="text"
                    name="Phone"
                    className="Phone"
                    tabIndex="3"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                </div>
                <div className="form-group">
                <label for="message">Notes</label>
                <textarea
                    className="message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                </div>
                <button type="submit" className="send btn w-100 btn_white">Book</button>
            </form>
        </>
    )
}

export default BookingForm;
