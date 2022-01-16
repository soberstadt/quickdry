# typed: true
class CreateNotes < ActiveRecord::Migration[6.1]
  def change
    create_table :notes do |t|
      t.text :body
      t.date :date

      t.timestamps
    end
  end
end
