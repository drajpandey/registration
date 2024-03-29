import React from "react";
import { BrowserRouter } from "react-router-dom";
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app

import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";

import { UserProvider } from "./contexts/user.context";

import Login from "./pages/Login.page";
import PrivateRoute from "./pages/PrivateRoute.page";
import Signup from "./pages/Signup.page";

import About from "./pages/About";
import UpdateFees from "./pages/updatefees";
import Showfees from "./pages/feedetail";
import Home from "./pages/Home"
const App = () => {
 return (
<BrowserRouter>
{/* We are wrapping our whole app with UserProvider so that */}
{/* our user is accessible through out the app from any page*/}
<UserProvider>
  <Routes>
    <Route exact path="/login" element={<Login />} />
    <Route exact path="/signup" element={<Signup />} />
    {/* We are protecting our Home Page from unauthenticated */}
    {/* users by wrapping it with PrivateRoute here. */}
    <Route element={<PrivateRoute />}>
       <Route exact path="/" element={<Home />} />
       <Route exact path="/about" element={<About />} />
       <Route exact path="/create" element={<Create />} />
       <Route path="/edit/:id" element={<Edit />} />
       <Route path="/record" element={<RecordList />}/>
       <Route path="/updatefees" element={<UpdateFees />}/>
       <Route path="/fees" element={<Showfees />}/>
       <Route path="*" element={<Showfees />}/>

    </Route>
  </Routes>
</UserProvider>
</BrowserRouter>


 );
};
 
export default App;