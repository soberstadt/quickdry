class NotesController < ApplicationController
  before_action :set_note, only: %i[show update destroy]
  before_action :set_notes, only: %i[new show]

  # GET /notes/new
  def new
    @note = Note.new
    render_note_page
  end

  # GET /notes/1/edit
  def show
    if params[:id].downcase == 'today'
      new
    else
      render_note_page
    end
  end

  # POST /notes or /notes.json
  def create
    if build_note.save
      redirect_to note_path(@note),
                  turbolinks: false,
                  notice: 'Note successfully created.'
    else
      render_note_page status: :unprocessable_entity
    end
  end

  # PATCH/PUT /notes/1 or /notes/1.json
  def update
    if @note.update(note_params)
      redirect_to note_path(@note), turbolinks: false
    else
      render_note_page status: :unprocessable_entity
    end
  end

  # DELETE /notes/1 or /notes/1.json
  def destroy
    @note.destroy
    redirect_to new_note_path, notice: 'Note was successfully destroyed.'
  end

  private

  def build_note
    @note = Note.new(note_params.merge(date: Date.today))
  end

  def render_note_page(options = {})
    options = options.merge(default_note_page_render_options)
    render options
  end

  def default_note_page_render_options
    { inertia: 'Note', props: { note: @note.as_json, notes: notes_json } }
  end

  # Use callbacks to share common setup or constraints between actions.
  def set_note
    @note = Note.find(params[:id]) unless  params[:id] == 'today'
  end

  def set_notes
    @notes ||= Note.all_plus_today
  end

  def notes_json
    set_notes.map { |note| note.as_json.slice('id', 'date_string') }
  end

  def note_params
    params.require(:note).permit(:body)
  end
end
