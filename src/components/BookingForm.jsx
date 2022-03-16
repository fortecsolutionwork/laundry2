import React,{useState} from 'react';
import { Modal, Button } from "react-bootstrap";
import { $ } from 'react-jquery-plugin';
import Dark_logo from '../images/logo-dark-bg.svg';
import loading_Img from '../images/caution.png';
function BookingForm() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [showModal, setShow] = useState(false);
    const [showModalp, setShowp] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);         
    const [mess, setMess] = useState("");
   
  function handleClosebook(){
   setShow(false);
   $('.box1').show();
   $('.box3').hide();
   $('.box2').hide();
   localStorage.clear();
   window.location.reload();
  }

    function handleSubmit(event) {
        event.preventDefault();
       // console.log(name +  email + phone +  message);
       setShowp(true);
       var month  = localStorage.getItem('month').toLowerCase();
       var numberofcloth  = localStorage.getItem('numberofcloth');
       var day = localStorage.getItem('day');
       var year  = new Date().getFullYear()
       var newAddress = localStorage.getItem('newAddress');
       var time = localStorage.getItem('time');
        var fullm;
        const montharar = {jan: 1, feb: 2, mar: 3, apr: 4, may: 5, jun: 6, jul: 7, aug: 8, sep: 9, oct: 10, nov: 11, dec:12};
        for (const [key, value] of Object.entries(montharar)) {
            console.log(key, value);
            if(month ==  key){
                fullm =  value
            }
          }
          function getTimeZone() {
            var offset = new Date().getTimezoneOffset(),
                o = Math.abs(offset);
            return (offset < 0 ? "+" : "-") + ("00" + Math.floor(o / 60)).slice(-2) + ":" + ("00" + (o % 60)).slice(-2);
        }
       
        $('.rmdp-selected .sd ').each(function(index,item){
       var bookingdate = year+"-"+fullm+"-"+$(item).html()+"T"+time.split(" ")[0]+":00-0500";
       alert(bookingdate);
      
        var axios = require('axios');
        var FormData = require('form-data');
        var data = new FormData();
        data.append('datetime', bookingdate);
        data.append('firstName', name);
        data.append('lastName', name);
        data.append('phone', phone);
        data.append('quantity', numberofcloth);
        data.append('notes', message);
        data.append('email', email);
        data.append('location', newAddress);

        var config = {
        method: 'post',
        url: 'https://fortecsalesforce.com/laundary/book.php',
        data : data
        };

        axios(config)
        .then(function (response) {
            setShow(true)
            setShowp(false);
            localStorage.setItem('remessage',JSON.stringify(response.data));
            setMess(JSON.stringify(response.data));
           //console.log(JSON.stringify(response.data)); 

        })
        .catch(function (error) {
        console.log(error);
        });

      }); 
     
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
      <Modal  className="output__modal" show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><img src={Dark_logo} /></Modal.Title>
        </Modal.Header>
        <Modal.Body>{mess}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClosebook}>
            Book Again
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal  className="output__modal second_modal" show={showModalp}>
        <Modal.Body>
          <img className='feature-img' src={loading_Img} />
          Processing...
        </Modal.Body>

      </Modal>
        </>
    )
}

export default BookingForm;
