class TasksController < ApplicationController
  def index
    render inertia: 'Tasks', props: { tasks: tasks }
  end

  def create
    Task.create!(description: params[:description])

    redirect_to tasks_path, turbolinks: false
  end

  private

  def tasks
    Task.all.as_json
  end
end
