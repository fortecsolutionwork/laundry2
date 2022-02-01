import React,{useState} from 'react';

function BookingForm() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");


    function handleSubmit(event) {
        console.log(name +  email + phone +  message);
        var Acuity = require('acuityscheduling');
         
            var acuity = Acuity.basic({
            userId: 24874570,
            apiKey: 'e3211301c69dd972450c5579e687c8d1'
            });
        var options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: {
                appointmentTypeID : 1,
                datetime          : '2022-02-02T09:00',
                firstName         : 'Bob',
                lastName          : 'McTest',
                email             : 'bob.mctest@example.com'
            }
            };
            let apt;
            // res.send("appointments IS WORKING!!!")
            apt = acuity.request('/appointments',options,function (err, response, appointments) {

              if (err) return console.error(err);
              apt = appointments;
              console.log(appointments)
              response.send(appointments);
            });
            console.log(apt);
            // res.send(apt);

         event.preventDefault();
     
    }
   
    return (
        <>
            <form onSubmit={handleSubmit} className="form bookingForm mt-4">

                     <div className="form-group">
                    <label for="Name">Name</label>
                    <input required
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
                    <input required
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
                <input required
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
