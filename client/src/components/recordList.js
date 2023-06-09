import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./darkMode.css"

import { Button } from '@mui/material'
import { useContext } from 'react';
import { UserContext } from '../contexts/user.context';
 


 
const Record = (props) => (
 <tr>
   <td>{props.record.name}</td>
   <td>{props.record.mobile}</td>
   <td>{props.record.confirmation}</td>
   <td>{props.record.date}</td>
   <td>
     <Link className="btn btn-link" to={`/edit/${props.record._id}`}>Edit</Link> |
     
     <button className="btn btn-link"
       onClick={() => {
        var confirmation=window.confirm(`Do you really to want delete?`);
       
        if (confirmation) {
          props.deleteRecord(props.record._id);
        }
         else{
          window.alert("To fir time paas kyu kiya tha?")
         }
       }}
     >
        Delete
     </button>
   </td>
 </tr>
);
 
export default function RecordList() {
   
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
     const response = await fetch(`http://localhost:5050/record/`);
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const records = await response.json();
     setRecords(records);
   }
 
   getRecords();
 
   return;
 }, [records.length]);
 
 // This method will delete a record
 async function deleteRecord(id) {
   await fetch(`http://localhost:5050/record/${id}`, {
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
     <h1>Record List</h1>
     <table   border={10}  className="table" >
       <thead>
         <tr>
           <th>Name</th>
           <th>Mobile</th>
           <th>Confirmation</th>
           <th>Date</th>
           <th>Action</th>
         </tr>
       </thead>
       <tbody>{recordList()}</tbody>
     </table>
     <>
     <h1>Welcome to Our Database!!!</h1>
     <Button variant="contained" onClick={logOut}>Logout</Button>
   </>
   </div>
   
 );
}