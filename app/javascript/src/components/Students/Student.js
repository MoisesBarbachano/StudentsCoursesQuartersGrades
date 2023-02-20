import React, { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom";

const Student = () => {
  const [studentResponse, setStudentResponse] = useState(null);

  let { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/students/${id}`, /*requestOptions*/)
      .then((response) => response.json())
      .then((student_show) => setStudentResponse(student_show))
  }, []);

  return (
    <div style={{marginTop: "20px"}}>
      <Link to={"/students"}>Show all students</Link>
      <hr style={{marginTop: "20px"}}/>
      {studentResponse &&
        <div>
          <strong>Name: </strong><span>{studentResponse.student.name}</span><br/>
          <strong>Email: </strong><span>{studentResponse.student.email}</span><br/>
          <div>
            <h3>Courses</h3>
            {studentResponse.courses && studentResponse.courses.map((course) =>
              <div>
              <strong style={{marginLeft: "10px"}}>{course.name}</strong><br/>
              {course.quarters && course.quarters.map((quarter) =>
                <div>
                  <span style={{marginLeft: "20px", marginTop: "0px"}}>Quarter {quarter.name}</span>
                  <span style={{marginLeft: "20px", marginTop: "0px"}}>Grade: {quarter.grade}</span>
                  <span style={{marginLeft: "20px", marginTop: "0px"}}>{quarter.status}</span>
                </div>
              )}
              </div>
            )}
          </div>
        </div>
      }
    </div>
  );
}

export default Student
