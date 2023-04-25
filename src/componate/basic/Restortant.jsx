import React, { useState } from 'react';
import './style.css';
import Menu from "./menuApi";
import MenuCard from  "./MenuCard";

const Restortant = () => {
  const [menuData , setMenuData] = useState(Menu);
  console.log(menuData);
  
  return (
    <>
      <MenuCard/>
    </>
  )
}

export default Restortant