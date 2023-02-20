import React, { useState, useEffect } from 'react'
import { redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from 'axios'

const NewCourse = () => {
  const [form, setForm] = React.useState({
    email: '',
    name: '',
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const token =  document.querySelector('[name=csrf-token]').content
    
    axios.defaults.headers.common['X-CSRF-TOKEN'] = token
    axios.post('http://localhost:3000/api/v1/courses', {name: form.name})
      .then(resp => alert("Course created successfully"))
      .catch(error => alert("Name already exists"))
  };


  return (
    <div>
    <form style={{marginTop: "40px"}} onSubmit={handleSubmit}>
      <Link to={"/courses"}>Courses</Link><br/><br/>
      <div>
        <label style={{marginRight: "10px"}} htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={form.name}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
    </div>
  );
}

export default NewCourse
