# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

student_one = Student.create(email: "test1@gmail.com", name: "Armando Manzanero")
student_two = Student.create(email: "test2@gmail.com", name: "Pedro Sanchez")
student_three = Student.create(email: "test3@gmail.com", name: "Gustavo Armando")

course_one = Course.create(name: "Math")
course_two = Course.create(name: "English")

course_one.students << student_one
course_one.students << student_two
course_one.students << student_three

course_one.save!

course_two.students << student_two
course_two.students << student_three

course_two.save!

student_one_math = student_one.student_courses.first
student_two_math = student_two.student_courses.first
student_three_math = student_three.student_courses.first

Quarter.create(name: 1, grade: 10, status: "passed", student_course: student_one_math)
Quarter.create(name: 2, grade: 7, status: "passed", student_course: student_one_math)
Quarter.create(name: 3, grade: 8, status: "passed", student_course: student_one_math)
Quarter.create(name: 4, grade: 6, status: "failed", student_course: student_one_math)

Quarter.create(name: 1, grade: 8, status: "passed", student_course: student_two_math)
Quarter.create(name: 2, grade: 8, status: "passed", student_course: student_two_math)
Quarter.create(name: 3, grade: 6, status: "failed", student_course: student_two_math)
Quarter.create(name: 4, grade: 6, status: "failed", student_course: student_two_math)

Quarter.create(name: 1, grade: 10, status: "passed", student_course: student_three_math)
Quarter.create(name: 2, grade: 10, status: "passed", student_course: student_three_math)
Quarter.create(name: 3, grade: 10, status: "passed", student_course: student_three_math)
Quarter.create(name: 4, grade: 0, status: "failed", student_course: student_three_math)


student_two_english = student_two.student_courses.last
student_three_english = student_three.student_courses.last

Quarter.create(name: 1, grade: 10, status: "passed", student_course: student_two_english)
Quarter.create(name: 2, grade: 7, status: "passed", student_course: student_two_english)
Quarter.create(name: 3, grade: 8, status: "passed", student_course: student_two_english)
Quarter.create(name: 4, grade: 6, status: "failed", student_course: student_two_english)

Quarter.create(name: 1, grade: 10, status: "passed", student_course: student_three_english)
Quarter.create(name: 2, grade: 10, status: "passed", student_course: student_three_english)
Quarter.create(name: 3, grade: 10, status: "passed", student_course: student_three_english)
Quarter.create(name: 4, grade: 10, status: "passed", student_course: student_three_english)
