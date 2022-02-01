import React,{useState}from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
const list = [
    {
      id: '1',
      name: '1',
    },
    {
      id: '2',
      name: '2',
    },
    {
        id: '3',
        name: '3',
      },
      {
        id: '4',
        name: '4',
      },
      {
        id: '5',
        name: '5',
      },
      {
        id: '6',
        name: '6',
      },
      {
        id: '7',
        name: '8',
      },
      {
        id: '9',
        name: '9',
      },
      {
        id: '10',
        name: '10',
      }
  ];
function Bookingstep2() {
  const [tripType, setTripType] = useState("1");
  localStorage.setItem('numberofcloth', tripType);
    const [date, setDate] = useState(new Date());
    // const [time, setTime] = useState("hello");
    var month = date.toLocaleString('default', { month: 'short' });
    var day = date.getUTCDate() + 1;
    console.log("localStorage.getItem(newAddress)");
    // console.log(`${month}: ${day}`);
    function Search() {
        return (
            <div className='app'>
                <div className='calendar-container'>
                    <Calendar onChange={setDate} value={date} />
                </div>
                {/* <p className='text-center'>
                <span className='bold'>Selected Date:</span>{' '}
                {date.toDateString()}
                </p> */}
            </div>
        );
    }

    return (
        <>
            <div className="calendar_wrapper booking-box box2">
                <div className="box-header">
                    <div className="selected-location mb-3"><div> <span className='current-location'></span> <br /><span className='selected date_selected'>{`${month}: ${day}`}</span></div></div>
                    <h1><span className='selectedTime'>Select the dates</span></h1>
                </div>
                <div className="box-body">
                    <p>How many times? &nbsp;<small><FontAwesomeIcon icon={['fas', 'info-circle']} /></small></p>
                    <ul className='list-inline d-flex justify-content-between times_options'>
                    {list.map((item) => (
                        <li className='list-inline-item' onClick={() => {
                          setTripType(item.name);
                      }} key={item.id}><label><input type="radio" value={tripType}   checked={tripType == item.name} name="times" /><span>{item.name}</span></label></li>
                    ))}                 
                    </ul>

                    <Search defaultValue={''} />
                </div>
            </div>
        </>
    )
}

export default Bookingstep2;
