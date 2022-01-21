import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Dark_logo from '../images/logo-dark-bg.svg';


function Header() {
  const [isActive, setActive] = useState("false");
  const ToggleClass = () => {
    setActive(!isActive); 
   };
    return (
      <header className="main_header">
        <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-3">
          <span onClick={ToggleClass} className="menu_open"><FontAwesomeIcon icon={['fas', 'bars']} /></span>
          <h2 className="logo"><img src={Dark_logo} alt="" className="img-fluid"/></h2>
          </div>
          <div className="col-md-9 text-right offcanvas_menu">
            <div className={ isActive ? null : "active"}>
            <span onClick={ToggleClass} className="menu_close"><FontAwesomeIcon icon={['fas', 'times']} /></span>
            <ul className="list-inline">
                <li className="list-inline-item active"><a href="#">How it works</a></li>
                <li className="list-inline-item"><a href="#">FAQ</a></li>
                <li className="list-inline-item"><a href="#">(416)984-4659</a></li>
            </ul>
            </div>
          </div>
        </div>
        </div>
      </header>
    );  
  }
  
  export default Header;