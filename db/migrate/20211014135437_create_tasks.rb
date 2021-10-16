class CreateTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :tasks do |t|
      t.string :description, null: false
      t.boolean :completed, null: false, default: false

      t.timestamps
    end
  end
end
