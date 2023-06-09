import React from "react";
import { Navbar, Button} from "@nextui-org/react";
import { Layout } from "./Layout.js";
import logo from "./logo.jpeg"



export default function App() {
  
  
  return (
    <Layout>
      <Navbar variant="sticky">
        <Navbar.Brand>
       
          <img src={logo} alt="raj" width="70" height="60"
  />
          
        </Navbar.Brand>
        <Navbar.Content >
        
           <Button shadow color="gradient"  auto>
             
             <Navbar.Link href="/" className="nav-link create">Create Record</Navbar.Link>
             </Button>
             <Button shadow color="gradient"  auto>
             <Navbar.Link href="/record" className="nav-link create">Show Record</Navbar.Link>
             </Button>
        </Navbar.Content>
     
      </Navbar>
         
    </Layout>
  )
}
