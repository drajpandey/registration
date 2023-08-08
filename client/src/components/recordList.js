import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./darkMode.css"

import { Button } from '@mui/material'
import { useContext } from 'react';
import { UserContext } from '../contexts/user.context';
import { Loading } from "@nextui-org/react";
import Navbar from "./navbar/navApp";


 
const Record = (props) => (
 <tr>
   <td>{props.record.name}</td>
   <td>{props.record.mobile}</td>
   <td>{props.record.confirmation}</td>
   <td>{props.record.date}</td>
   <td>{props.record.submissionTime}</td>
   <td>{props.record.UpdatedTime}</td>
   <td>
    
    <button>
     <Link className="btn btn-link"
     
     to={`/edit/${props.record._id}`}><i class="fa-solid fa-pen-to-square"> Edit 👨🏼‍🔧</i></Link> 
     </button>

     <button className="btn btn-link"
       onClick={() => {
        props.deleteRecord(props.record._id);
        //  var confirmation=window.prompt(`Give password to take action!!😍`); 
       
        //  if (confirmation === "123") {
        //   props.deleteRecord(props.record._id);
        // }
        //  else{
        //   window.alert("Don't waste your time!!!🤣")
        //  }
       }}>
       <i class="fa-solid  fa-trash-can "> Delete</i>
     </button>
     {/* //https://fontawesome.com/icons */}

     <button>
      <Link to={`/fees`}>
     <i class="fa-solid fa-folder-open"> Fees detail</i></Link></button>
   </td>
   
 </tr>
);
 
export default function RecordList() {

  const[loading,setloading]=useState(true);
   
 const { logOutUser } = useContext(UserContext);
 
 // This function is called when the user clicks the "Logout" button.
 const logOut = async () => {
   try {
     // Calling the logOutUser function from the user context.
     const loggedOut = await logOutUser();
     // Now we will refresh the page, and the user will be logged out and
     // redirected to the login page because of the <PrivateRoute /> component.
     if (loggedOut) {
       window.location.reload(true);
       
     }
   } catch (error) {
     alert(error)
   }
 }
 


 const [records, setRecords] = useState([]);
 
 // This method fetches the records from the database.
 useEffect(() => {
   async function getRecords() {
     const response = await fetch(`https://registration-5m6t.onrender.com/record/`);
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
     setloading(false);
     const records = await response.json();
     setRecords(records);
   }
 
   getRecords();
 
   return;
 }, [records.length]);
 
 // This method will delete a record
 async function deleteRecord(id) {
   await fetch(`https://registration-5m6t.onrender.com/record/${id}`, {
     method: "DELETE"
   });
 
   const newRecords = records.filter((el) => el._id !== id);
   setRecords(newRecords);
 }
 
 // This method will map out the records on the table
 function recordList() {
   return records.map((record) => {
     return (
       <Record
         record={record}
         deleteRecord={() => deleteRecord(record._id)}
         key={record._id}
       />
     );
   });
 }
 
 // This following section will display the table with the records of individuals.
 return (
  <div>
<div>
<Navbar />
</div>

 
   <div>
     <h1>Record List</h1>
     <table   border={10}  className="table" >
       <thead>
         <tr>
           <th>Name</th>
           <th>Mobile</th>
           <th>Confirmation</th>
           <th>Date</th>
           <th>Submission Time</th>
           <th>Last Updated Time</th>
           <th>Action</th>
           
         </tr>
       </thead>
       <tbody>{recordList()}</tbody>
       
     </table>
     <>
    {loading ? (<h1><Loading size="xl">Please wait!!!</Loading></h1>):( <h1>Welcome to our Database</h1>)}
    
   </>
   </div>
   <h1>....</h1>
      {/* <Clock />  */}
      <Button variant="contained" onClick={logOut}>Logout</Button>
     <footer> <h1>&copy; 2023 Study Addict. All rights reserved.</h1></footer>
   </div>
   
 );
}