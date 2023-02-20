class CoursesController < ApplicationController
  def index
    render json: Course.all
  end

  def show
    course = Course.find(params[:id])
    students = course.students

    render json: { course: course, students: students }
  end

  def create
    name = params[:name]

    course = Course.create!(name: name)

    render json: course
  end
end
