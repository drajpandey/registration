// import React from "react";
// import { Navbar, Button} from "@nextui-org/react";
// import { Layout } from "./Layout.js";
// import logo from "./logo.jpeg"
// import { useNavigate } from "react-router";
// import './Nav.css';




// export default function App() {
//   const navigate = useNavigate();
//   function showrecord(){
  
//     navigate("/record");

//   }
//   function create(){
  
//     navigate("/create");

//   }
  
//   return (
//     <Layout>
//       <Navbar variant="static">
//         <Navbar.Brand>
//        <a href="/"><img src={logo} alt="raj" width="70" height="60"
//   /></a>
          
          
//         </Navbar.Brand>
//         <div className="bouncing-text"><h2>Tution Classes Management System</h2></div>
//         <Navbar.Content >
        
      
//            <Button shadow color="gradient"  auto>
//              <Navbar.Link onPress={create} className="nav-link create">Create Record</Navbar.Link>
//              </Button>
//              <Button shadow color="gradient"  auto>
//              <Navbar.Link onPress={showrecord} className="nav-link ">Show Record</Navbar.Link>
//              </Button>
             
//         </Navbar.Content>
     
//       </Navbar>
         
//     </Layout>
//   )
// }

import React, {useState} from "react";
import logo from "./logo.svg";
import "./Nav.css";
import { Link } from 'react-router-dom';

export default function App() {
  const [show, setShow] = useState(false);


  return(

  <nav>
  <div className="nav-center">
    {/* nav header */}
    <div className="nav-header">
      <img src={logo} className="logo" alt="logo" />
      <button className="nav-toggle" onClick={() => setShow(!show)}   >
        <i className="fas fa-bars" /> 
      </button>
    </div>
    {/* links */}
    <ul className={show ? "show-links links" : "links"}>
      <li>
        <Link to="/">home</Link>
      </li>
      <li>
        <Link to="/about">about</Link>
      </li>
      <li>
        <Link to="/record">records</Link>
      </li>
      <li>
        <Link to="/create">create</Link>
      </li>
    </ul>
    {/* social media */}
    <ul className="social-icons">
      <li>
        <a target="blank" href="https://www.facebook.com">
          <i className="fab fa-facebook" />
        </a>
      </li>
      <li>
        <a target="blank" href="https://www.twitter.com">
          <i className="fab fa-twitter" />
        </a>
      </li>
      <li>
        <a target="blank" href="https://www.twitter.com">
          <i className="fab fa-behance" />
        </a>
      </li>
      <li>
        <a target="blank" href="https://www.twitter.com">
          <i className="fab fa-linkedin" />
        </a>
      </li>
      <li>
        <a target="blank" href="https://www.twitter.com">
          <i className="fab fa-sketch" />
        </a>
      </li>
    </ul>
  </div>
</nav>

)

}