# typed: true
class NotesController < ApplicationController
  extend T::Sig

  before_action :set_note, only: %i[show update destroy]
  before_action :set_notes, only: %i[new show]

  class NoteControllerParams < T::Struct
    class NoteParams < T::Struct
      const :body, T.nilable(String)
    end

    const :note, T.nilable(NoteParams)
    const :id, T.nilable(String)
  end

  # GET /notes/new
  sig { void }
  def new
    @note = Note.new
    render_note_page
  end

  # GET /notes/1/edit
  sig { void }
  def show
    @note.persisted? ? render_note_page : new
  end

  # POST /notes or /notes.json
  sig { void }
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
  sig { void }
  def update
    if @note.update(note_params)
      redirect_to note_path(@note), turbolinks: false
    else
      render_note_page status: :unprocessable_entity
    end
  end

  # DELETE /notes/1 or /notes/1.json
  sig { void }
  def destroy
    @note.destroy
    redirect_to new_note_path, notice: 'Note was successfully destroyed.'
  end

  private

  def build_note
    @note = Note.new(note_params.merge(date: Date.today))
  end

  def render_note_page(options = {})
    props = { note: @note.attributes.as_json, notes: notes_json }
    render(inertia: 'Note', props:, **options)
  end

  # Use callbacks to share common setup or constraints between actions.
  def set_note
    if controller_params.id == 'today'
      @note = Note.today_note
    else
      @note = Note.find(controller_params.id)
    end
  end

  def set_notes
    @notes ||= Note.all_plus_today
  end

  def notes_json
    set_notes.map { |note| note.slice(:id, :date_string, :first_line) }
  end

  sig { returns(NoteControllerParams) }
  def controller_params
    id = T.cast(params[:id], T.nilable(String))
    note_body = T.cast(params.dig(:note, :body), T.nilable(String))
    note = NoteControllerParams::NoteParams.new(body: note_body) if note_body
    NoteControllerParams.new(id:, note:)
  end

  sig { returns(Hash) }
  def note_params
    T.must(controller_params.note).serialize
  end
end
