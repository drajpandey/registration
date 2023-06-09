import React from "react";
import { Button } from "@nextui-org/react";
import "./darkMode.css";
 
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
 
// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
 
// Here, we display our Navbar
export default function Navbar() {
 return (
   <div>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
    {/* for dark mode */}
       <button
         className="navbar-toggler"
         type="button"
         data-toggle="collapse"
         data-target="#navbarSupportedContent"
         aria-controls="navbarSupportedContent"
         aria-expanded="false"
         aria-label="Toggle navigation"
       >
         <span className="navbar-toggler-icon"></span>
       </button>
 
       <div  >
         <ul className="navbar-nav ">
          
           <li className="nav-item">
           <Button shadow color="gradient"  auto>
             <NavLink className="nav-link" to="/create">
              Create Record   
             </NavLink>
             </Button>

           </li>
         </ul>
       </div>
     </nav>
   </div>
 );
}