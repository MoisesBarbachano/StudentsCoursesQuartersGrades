class Student < ApplicationRecord
  has_many :student_courses
  has_many :courses, through: :student_courses

  validates :email, uniqueness: true
end
