# typed: true
class AddVisibleToTasks < ActiveRecord::Migration[7.0]
  def change
    add_column :tasks, :completed_at, :datetime
  end
end
