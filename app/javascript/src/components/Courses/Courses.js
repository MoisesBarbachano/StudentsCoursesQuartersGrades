import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/courses", /*requestOptions*/)
      .then((response) => response.json())
      .then((courses_list) => setCourses(courses_list))
  }, []);

  return (
    <div>
      <Link to={"/"}>Home</Link>
      <h3>Courses</h3>
      <Link to={"/new_course"}>New Course</Link><br/><br/>
      <table>
          <tr>
            <th style={{border: '1px solid black', paddingLeft: '10px', paddingRight: '10px'}}>Name</th>
            <th style={{border: '1px solid black', paddingLeft: '10px', paddingRight: '10px'}}>Details</th>
          </tr>    
        {courses.map(function(element) {
          return (
            <tr key={element.id}>
              <td style={{border: '1px solid black'}}><span>{element.name}</span></td>
              <td style={{border: '1px solid black', textAlign: 'center'}}>
                <Link to={"/course/" + element.id}>Show</Link>
              </td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}

export default Courses
