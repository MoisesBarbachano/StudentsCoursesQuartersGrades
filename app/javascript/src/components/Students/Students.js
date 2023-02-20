import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

const Students = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/students", /*requestOptions*/)
      .then((response) => response.json())
      .then((students_list) => setStudents(students_list))
  }, []);

  return (
    <div>
      <Link to={"/"}>Home</Link>
      <h3>Students</h3>
      <Link to={"/new_student"}>New Student</Link><br/><br/>
      <table>
          <tr>
            <th style={{border: '1px solid black', paddingLeft: '10px', paddingRight: '10px'}}>Name</th>
            <th style={{border: '1px solid black', paddingLeft: '10px', paddingRight: '10px'}}>Email</th>
            <th style={{border: '1px solid black', paddingLeft: '10px', paddingRight: '10px'}}>Details</th>
          </tr>    
        {students.map(function(element) {
          return (
            <tr key={element.id}>
              <td style={{border: '1px solid black'}}><span>{element.name}</span></td>
              <td style={{border: '1px solid black'}}><span>{element.email}</span></td>
              <td style={{border: '1px solid black', textAlign: 'center'}}>
                <Link to={"/student/" + element.id}>Show</Link>
              </td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}

export default Students
