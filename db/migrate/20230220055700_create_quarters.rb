class CreateQuarters < ActiveRecord::Migration[6.1]
  def change
    create_table :quarters do |t|
      t.integer :name
      t.integer :grade
      t.string :status

      t.timestamps
    end
  end
end
