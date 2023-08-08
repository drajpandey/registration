import React, { useState } from "react";
import { useNavigate } from "react-router";
import confetti from 'canvas-confetti';
import { Button,Radio } from "@nextui-org/react";
import "./darkMode.css";
// import "./create.css";
import Navbar from "./navbar/navApp";
// import axios from 'axios';// Assuming you have Axios or any other HTTP client library installed

export default function Create() {
  const handleConfetti = () =>  {
    confetti();
  };
 const [form, setForm] = useState({
  name: "",
  mobile: "",
  confirmation: "",
  date:""

 });
 const navigate = useNavigate();
 
 // These methods will update the state properties.
 
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 // This function will handle the submission.
 async function onSubmit(e) {
   
   e.preventDefault();
   
   const submissionTime = new Date().toLocaleString(); // Get the current time in a readable format
   
   // When a post request is sent to the create url, we'll add a new record to the database.
   const newPerson = { ...form,submissionTime,confirmation };


   var SERVER = "https://registration-5m6t.onrender.com/record";


   await fetch(SERVER, {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newPerson),
   })
   .catch(error => {
     window.alert(error);
     return;
   });

   //for checking which data is transmitting
   console.log(newPerson); 
 
   setForm({ name: "", mobile: "",date:"",confirmation: "" });
   navigate("/record");
 }
 const [confirmation, setConfirmation] = React.useState('');
 
 // This following section will display the form that takes the input from the user.
 return (
  <div>
    <div><Navbar /></div>
   <div>
    
     <h1>Create New Record</h1>
     <form className="form" onSubmit={onSubmit}>
       <div className="form-group">
     <label>Name:</label>
          <input   
           required
           placeholder="Name"
           id="name"
           value={form.name}
           onChange={(e) => updateForm({ name: e.target.value })} />
       </div>
     
       <div className="form-group">
       <label>Mobile:</label>
          <input   placeholder="Mobile" 
          required       
          id="mobile"
          value={form.mobile}
          onChange={(e) => updateForm({ mobile: e.target.value })}
           />
       </div>
        
       <div className="form-group">
   
       <label >Are You Coming?</label>
        <Radio.Group onChange={setConfirmation} defaultValue="" orientation="horizontal">
      <Radio value="Going" color="primary" labelColor="primary" id="confirmation">
        Going
      </Radio>
      <Radio value="Not Going" color="secondary" labelColor="secondary"  id="confirmation">
        Not Going
      </Radio>
      <Radio value="May be" color="success" labelColor="success"  id="confirmation">
        May be
      
      </Radio>
    </Radio.Group>
    </div>
   <div className="form-group">
         <label htmlFor="date">Date</label>
         <input 
         className="form-check-input"
         name="date"
         id="date"
         onChange={(e) => updateForm({ date: e.target.value })}
          width="186px" 
          type="date" 
        />
       </div>
        
       <div className="form-group">
    <Button
      shadow
      color="gradient"
      type="submit"
      value="Create person"
      className="btn"
      auto
      rounded
      ripple={true}
      size="xl"
      onPress={handleConfetti}
      
      >
      Submit
    </Button>
       </div>
     </form>
   </div>
   </div>
 );
 }