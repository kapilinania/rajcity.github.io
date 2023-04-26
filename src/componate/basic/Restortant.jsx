import React, { useState } from 'react';
import './style.css';
import Menu from "./menuApi";
import MenuCard from  "./MenuCard";
import Navbar from './Navbar';

const Restortant = () => {
  const [menuData , setMenuData] = useState(Menu);
  const filterItem = (category) =>{
  const updatedMenu = Menu.filter((currentElemnt)=>{
        return currentElemnt.name === category;
  }); 
  setMenuData(updatedMenu);
};
  
  return (
    <>
      <div className='container-fluid'>
          <div className='container'>
            <div className='row'>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#" onClick={() => setMenuData(Menu)}>RAJASTHAN</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#" onClick={() => filterItem("JODHPUR")}>JODHOPUR</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#" onClick={() => filterItem("JAIPUR")}>JAIPUR</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#" onClick={() => filterItem("KOTA")}>KOTA</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#" onClick={() => filterItem("AJMER")}>AJMER</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#" onClick={() => filterItem("PALI")}>PALI</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#" onClick={() => filterItem("NAGAUR")}>NAGAUR</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-uppercase" href="#" onClick={() => filterItem("JAISALMER")}>Jaisalmer</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-uppercase" href="#" onClick={() => filterItem("UDAIPUR")}>Udaipur</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-uppercase" href="#" onClick={() => filterItem("BIKANER")}>Bikaner</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-uppercase" href="#" onClick={() => filterItem("BARMER")}>Barmer</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-uppercase" href="#" onClick={() => filterItem("SIKAR")}>Sikar</a>
                        </li>
                        
                    </ul>
                    </div>
                </div>
             </nav>
            </div>
          </div>
        </div> 
      <div className='container'>
        <div className='row'>
        <MenuCard menuData = {menuData}/>
        </div>
      </div>
      {/* //we are useing prpos concept {} */}
    </>
  )
}

export default Restortant