// export default function Updatefess(){

//     return(
//         <>
        
//         </>
//     )
// }
import React, { useState ,useEffect} from 'react';
import { Loading } from "@nextui-org/react";
import './updatefees.css';
import Navbar from '../components/navbar/navApp';
import { Button } from "@nextui-org/react";
import "../components/darkMode.css"

export default function Updatefess() {
  const [records, setRecords] = useState([]); // Assuming you have fetched data and stored it in this state
  const [selectedUser, setSelectedUser] = useState('');
  const [amount, setAmount] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');


  const handleOptionChange = (event) => {
    setSelectedUser(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };
  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

 // This method fetches the records from the database.
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:5050/record/`);
  
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
  

  const handleSubmit = (event) => {
    event.preventDefault();
    // Process the form data here or send it to an API endpoint
    const selectedUserId = records.find((user) => user.name === selectedUser)?._id;
    console.log('ID', selectedUserId)
    console.log('Name:', selectedUser);
    console.log('Amount:', amount);
    console.log('Selected Date:', selectedDate);
    console.log('Fees Month:', selectedMonth);
   const fees=[amount,selectedDate,selectedMonth]
    console.log(fees)
   

  };

  const[loading,setloading]=useState(true);


  const monthNames = [
     'Jun',
    'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec','Jan', 'Feb', 'Mar', 'Apr', 'May'
  ];
    
 

  return (
    <>
     <Navbar />
     {loading ? (<h1><Loading size="xl">Please wait!!!</Loading></h1>):( <h1>Record List Updated</h1>)}
     <h1>
      ...
     </h1>
    <form className='form'  onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Name:</label>
        <select  required value={selectedUser} onChange={handleOptionChange}>
          <option value="">Name Of Student:</option>
          {records.map((item) => (
            <option  value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Enter Amount:</label>
        <input
         required
          type="number"
          value={amount}
          onChange={handleAmountChange}
          placeholder="Enter the amount"
        />
      </div>

      <div className="form-group">
        <label>Select Date:</label>
        <input
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </div>
      <div>
        <label>Fees Month:</label>
        <input
          type="month"
          value={selectedMonth}
          onChange={handleMonthChange}
        />
      </div>

      <Button
      disabled={!selectedUser || !amount}
      shadow
      color="gradient"
      type="submit"
      value="Update person fees"
      className="btn"
      auto
      rounded
      ripple={true}
      size="xl"
      >
      Submit
    </Button>
    </form>
    <h1>...</h1>
    <table border={10}  className="table">
      <thead>
      <th>Name</th>  
    
      {monthNames.map((month) => (
        <th key={month}>{month}</th>
      ))}
      </thead>
      <tbody>
    {records.map((student) => (
      <tr key={records._id}>
        <td>{student.name}</td>
        
       
      </tr>
    ))}
  </tbody>
      
      
    </table>
    <h1>..</h1>
    <footer> <h1>&copy; 2023 Study Addict. All rights reserved.</h1></footer>

    </>
  );
};

