# typed: true
class TasksController < ApplicationController
  extend T::Sig

  sig { void }
  def index
    render inertia: 'Tasks', props: { tasks: tasks }
  end

  sig { void }
  def create
    Task.create!(description: params[:description])

    redirect_to tasks_path, turbolinks: false
  end

  def update
    task = Task.find(params[:id])
    task.update(params.permit(:completed_at))

    redirect_to tasks_path, turbolinks: false
  end

  private

  def tasks
    Task.where(completed_at: nil).as_json
  end
end
