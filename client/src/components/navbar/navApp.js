import React from "react";
import { Navbar, Button} from "@nextui-org/react";
import { Layout } from "./Layout.js";
import logo from "./logo.jpeg"
import { useNavigate } from "react-router";




export default function App() {
  const navigate = useNavigate();
  function showrecord(){
  
    navigate("/record");

  }
  function create(){
  
    navigate("/create");

  }
  
  return (
    <Layout>
      <Navbar variant="sticky">
        <Navbar.Brand>
       
          <img src={logo} alt="raj" width="70" height="60"
  />
          
        </Navbar.Brand>
        <Navbar.Content >
        
           <Button shadow color="gradient"  auto>
             <Navbar.Link onPress={create} className="nav-link create">Create Record</Navbar.Link>
             </Button>
             <Button shadow color="gradient"  auto>
             <Navbar.Link onPress={showrecord} className="nav-link ">Show Record</Navbar.Link>
             </Button>
        </Navbar.Content>
     
      </Navbar>
         
    </Layout>
  )
}
