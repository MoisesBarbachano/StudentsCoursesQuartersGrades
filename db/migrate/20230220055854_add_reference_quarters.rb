class AddReferenceQuarters < ActiveRecord::Migration[6.1]
  def change
    add_reference :quarters, :student_course, index: true
  end
end
