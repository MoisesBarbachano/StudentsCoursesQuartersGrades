import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from '../components/Home'

import Students from '../components/Students/Students'
import Student from '../components/Students/Student'
import NewStudent from '../components/Students/NewStudent'


import Courses from '../components/Courses/Courses'
import Course from '../components/Courses/Course'
import NewCourse from '../components/Courses/NewCourse'

import NewGrade from '../components/Quarters/NewGrade'

const App = () => {
  return (
    <Routes>
        <Route path="/*" element={<Home />} exact />

        <Route path="/students" element={<Students />} exact />
        <Route path="/student/:id" element={<Student />} exact />
        <Route path="/new_student" element={<NewStudent />} exact />

        <Route path="/courses" element={<Courses />} exact />
        <Route path="/course/:id" element={<Course />} exact />
        <Route path="/new_course" element={<NewCourse />} exact />

        <Route path="/new_grade" element={<NewGrade />} exact />


    </Routes>
  )
}

export default App