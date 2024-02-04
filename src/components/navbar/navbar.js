import React, { useState } from 'react';
import "./navbar.css";
import logo from "../asset/logoo.png";

import {Link} from "react-scroll";

const Navbar =()=> {
  const [useMenu, setMenu] = useState(false);
  return (
   <nav className = "navbar">
       <image src={logo} alt="logo" className="logo" >Ahmad</image>
       <div className="desktopmenu"  >
         <Link  className="desktopMenuListItem">Home </Link>
         <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
         <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-50} duration={500}  className="desktopMenuListItem">Portfolio</Link>
         <Link activeClass="active" to="footer" spy={true} smooth={true} offset={-50} duration={500}  className="desktopMenuListItem">Clients</Link>
       </div>
       <button className="desktopbutton" onClick={()=>{
         document.getElementById('contact').scrollIntoView({behavior: "smooth"})
       }}>
           <image src="" alt="" className="desktopimg" ></image>
   Contact
       </button>

       <image src="" alt="" className="llogo" onClick={()=>setMenu(!useMenu)} >MENU</image>
       <div className="mobmenu" style={{display: useMenu? "":"none"}} >
         <Link  className="ddesktopMenuListItem" to="intro" spy={true} smooth={true} offset={-50} duration={500} onClick={()=>setMenu(false)}>Home </Link>
         <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className="ddesktopMenuListItem" onClick={()=>setMenu(false)}>About</Link>
         <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-50} duration={500}  className="ddesktopMenuListItem" onClick={()=>setMenu(false)}>Portfolio</Link>
         <Link activeClass="active" to="footer" spy={true} smooth={true} offset={-50} duration={500}  className="ddesktopMenuListItem" onClick={()=>setMenu(false)}>Clients</Link>
         <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={500}  className="ddesktopMenuListItem" onClick={()=>setMenu(false)}>Contact</Link>
       </div>

   </nav>
  )
}

export default Navbar 