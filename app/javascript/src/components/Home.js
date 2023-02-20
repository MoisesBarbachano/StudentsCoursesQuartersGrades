import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{marginTop: "40px"}}>
      <Link to={"/students"}>Students</Link><br/><br/>
      <Link to={"/courses"}>Courses</Link><br/><br/>
      
    </div>
  )
}

export default Home