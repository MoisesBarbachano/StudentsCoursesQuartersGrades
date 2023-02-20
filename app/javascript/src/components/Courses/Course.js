import React, { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom";

const Course = () => {
  const [courseResponse, setCourseResponse] = useState(null);

  let { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/courses/${id}`, /*requestOptions*/)
      .then((response) => response.json())
      .then((course_show) => setCourseResponse(course_show))
  }, []);

  return (
    <div style={{marginTop: "20px"}}>
      <Link to={"/courses"}>Show all courses</Link>
      <hr style={{marginTop: "20px"}}/>
      {courseResponse &&
        <div>
          <strong>Name: </strong><span>{courseResponse.course.name}</span><br/>
          <div>
            <h3>Students</h3>
            {courseResponse.students && courseResponse.students.map((student) =>
              <div>
                <span style={{marginLeft: "10px"}}><strong>Name:</strong> {student.name}, <strong>Email:</strong> {student.email}</span><br/>
              </div>
            )}
          </div>
        </div>
      }
    </div>
  );
}

export default Course
