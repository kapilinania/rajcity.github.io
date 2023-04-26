import React, { useState } from 'react';
import './style.css';
import Menu from "./menuApi";
import MenuCard from  "./MenuCard";
import Navbar from './Navbar';

const Restortant = () => {
  const [menuData , setMenuData] = useState(Menu);
  
  
  return (
    <>

       <Navbar /> 
      <MenuCard menuData = {menuData}/>
      {/* //we are useing prpos concept {} */}
    </>
  )
}

export default Restortant