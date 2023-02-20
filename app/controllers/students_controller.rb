class StudentsController < ApplicationController
  def index
    render json: Student.all
  end

  def show
    student = Student.find(params[:id])
    courses = student.student_courses.map { |std_course| { name: std_course.course.name, quarters: std_course.quarters } }

    render json: { student: student, courses: courses }
  end

  def create
    email = params[:email]
    name = params[:name]

    student = Student.create!(email: email, name: name)

    render json: student
  end
end
