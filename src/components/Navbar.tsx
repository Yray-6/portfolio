import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
    const [isOpen,setOpen] = useState(false);

    const toggleMenu =()=>{
        setOpen(open=>!open);
    }

    const textVariants = {
      hover: {
        scale: 1.1, // Increase the scale on hover
      },
      initial: {
        scale: 1, // Initial scale
      },
    };
  
    const backgroundTextVariants = {
      hover: {
        y: 0, // Animate Y position to 0 (no translation) on hover
      },
      initial: {
        y: '-100%', // Initial Y position above the element
      },
    };
  

  return (
    <div>
        <nav className="fixed flex z-50 justify-between px-16 py-8 w-[100%]">
            <p className="text-5xl">Y-RAY LOGOs</p>
           <button onClick={toggleMenu}><FontAwesomeIcon icon={faBars} className="text-5xl"/></button> 
            <div className={` ${isOpen ? "absolute":"hidden"} bg-black w-[100%] left-0 h-[1000px] top-[0] bottom-0 py-36  text-center`}>
           
      {/* Foreground Text */}
      <span><p className="mb-10"><NavLink onClick={toggleMenu} style={({ isActive }) => ({ color: isActive ? "red" : "white" })} to="/" className="text-5xl">Home</NavLink></p> </span>
    
               
           <p className="mb-10">   <NavLink onClick={toggleMenu} style={({ isActive }) => ({ color: isActive ? "red" : "white" })} to="contact" className="text-5xl mb-10">Contact</NavLink></p>  
             <p className="mb-10"><NavLink onClick={toggleMenu} style={({ isActive }) => ({ color: isActive ? "red" : "white" })} to="portfolio" className="text-5xl mb-10">portfolio</NavLink></p>   
                
                <p onClick={toggleMenu}>close</p>
            </div>
        </nav>
    </div>
  )
}
