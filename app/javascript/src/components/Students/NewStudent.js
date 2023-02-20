import React, { useState, useEffect } from 'react'
import { redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from 'axios'

const NewStudent = () => {
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
    axios.post('http://localhost:3000/api/v1/students', {name: form.name, email: form.email})
      .then(resp => alert("Student created successfully"))
      .catch(error => alert("Email already exists"))
  };


  return (
    <div>
    <form style={{marginTop: "40px"}} onSubmit={handleSubmit}>
      <Link to={"/students"}>Students</Link><br/><br/>
      <div>
        <label style={{marginRight: "10px"}} htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          value={form.email}
          onChange={handleChange}
        />
      </div>
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

export default NewStudent
