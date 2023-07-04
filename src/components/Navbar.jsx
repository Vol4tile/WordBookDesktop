import React from "react";
import { NavLink } from "react-router-dom";
import NavbarCSS from "../css/Navbar.module.css";


const Navbar = ({visible,setVisible}) => {
 
  return (
    <header className={NavbarCSS.container}>
      
      <nav className={NavbarCSS.innerContainer}>
        <div>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? NavbarCSS.pending : isActive ? NavbarCSS.active : ""
            }
            to="/"
          >
            Anasayfa
          </NavLink>
        </div>
        <div>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? NavbarCSS.pending : isActive ? NavbarCSS.active : ""
            }
            to="/Test"
          >
            Test
          </NavLink>
        </div>
        <div className={NavbarCSS.addWord} 
        onClick={()=>{
          setVisible(!visible)
        }}
        >
         
            Kelime Ekle
         
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
