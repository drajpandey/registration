import React, { useState, useEffect } from 'react';
import axios from 'axios';

function RecordsTable() {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [records, setRecords] = useState([]);

  useEffect(() => {
    // Fetch list of students when component mounts
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
    
   


  const fetchStudents = async () => {
    try {
      const response = await axios.get('/records');
      setStudents(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedStudent || !amount || !date) {
      alert('Please fill in all fields');
      return;
    }

    try {
      const response = await axios.post('/submit-record', {
        studentId: selectedStudent,
        amount,
        date,
      });
      console.log('Record submitted:', response.data);
      // Clear form fields after successful submission
      setSelectedStudent('');
      setAmount('');
      setDate('');
      // Refresh students list
      fetchStudents();
    } catch (error) {
      console.error(error);
    }
  };
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  return (
    <div>
      <h1>Student Monthly Records</h1>
      <form onSubmit={handleSubmit}>
        <select
          value={selectedStudent}
          onChange={(e) => setSelectedStudent(e.target.value)}
        >
          <option value="">Select a student</option>
          {records.map((student) => (
            <option key={student._id} value={student._id}>
              {student.name}
            </option>
          ))}
        </select>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button type="submit">Submit Record</button>
      </form>
     
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Class</th>
      {monthNames.map((month) => (
        <th key={month}>{month}</th>
      ))}
    </tr>
  </thead>
  <tbody>
    {students.map((student) => (
      <tr key={student._id}>
        <td>{student.name}</td>
        <td>{student.class}</td>
        {monthNames.map((month) => (
          <td key={month}>
            {/* Display amount and date for each month */}
            {student.monthlyRecords[month] && (
              <>
                Amount: {student.monthlyRecords[month].amount}<br />
                Date: {student.monthlyRecords[month].date}
              </>
            )}
          </td>
        ))}
      </tr>
    ))}
  </tbody>
</table>
    </div>
  );
}

export default RecordsTable;