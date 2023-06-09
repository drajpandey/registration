import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import confetti from 'canvas-confetti';
import { Input, Spacer ,Button,Radio } from "@nextui-org/react";

export default function Edit() {
  
  const handleConfetti = () =>  {
    confetti();
  };
  const [confirmation, setConfirmation] = React.useState('');
 const [form, setForm] = useState({
   name: "",
   mobile: "",
   confirmation: "",
   date:"",
   records: []
 });
 const params = useParams();
 const navigate = useNavigate();
 
 useEffect(() => {
   async function fetchData() {
     const id = params.id.toString();
     const response = await fetch(`https://registration-5m6t.onrender.com/record/${params.id.toString()}`);
 
     if (!response.ok) {
       const message = `An error has occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const record = await response.json();
     if (!record) {
       window.alert(`Record with id ${id} not found`);
       navigate("/");
       return;
     }
 
     setForm(record);
   }
 
   fetchData();
 
   return;
 }, [params.id, navigate]);
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 async function onSubmit(e) {
   e.preventDefault();
   const editedPerson = {
     name: form.name,
     mobile: form.mobile,
     confirmation: confirmation,
     date:form.date
   }
   // This will send a post request to update the data in the database.
   await fetch(`https://registration-5m6t.onrender.com/record/${params.id}`, {
     method: "PATCH",
     body: JSON.stringify(editedPerson),
     headers: {
       'Content-Type': 'application/json'
     },
   });
 
   navigate("/record");
 }
 
 // This following section will display the form that takes input from the user to update the data.
 return (
   <div>
     <h3>Update Record</h3>
     <form onSubmit={onSubmit}>
    

       <div className="form-group">
     
     <Input   
      required
      bordered 
     labelPlaceholder="Name" 
     color="primary" 
      underlined
      type="text"
      className="form-control"
      id="name"
      value={form.name}
      onChange={(e) => updateForm({ name: e.target.value })} />
  </div>
  <Spacer y={2} />
  <div className="form-group">
  
     <Input placeholder="Mobile" 
        labelPlaceholder="Mobile" 
        color="primary" 
        underlined
     required
     className="form-control"
     id="mobile"
     value={form.mobile}
     onChange={(e) => updateForm({ mobile: e.target.value })}
      />
  </div>
   
      
<div className="form-group">
   
   <label ><h3>Are You Coming?</h3></label>
    <Radio.Group onChange={setConfirmation}   orientation="horizontal">
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
     <label htmlFor="date"><h3>Date</h3></label>
     <Input 
     className="form-check-input"
     value={form.date}
     name="date"
     id="date"
     onChange={(e) => updateForm({ date: e.target.value })}
      width="186px" 
      type="date" 
    />
   </div>
   <Spacer y={2} />
       <br />
 
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
      onPress={handleConfetti} >
      Update Form
    </Button>
       </div>
     </form>
   </div>
 );
}