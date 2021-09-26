class NotesController < ApplicationController
  before_action :set_note, only: %i[ edit update destroy ]
  before_action :set_notes, only: %i[ new edit ]
  skip_before_action :verify_authenticity_token, only: %i[ create update ]

  # GET /notes/new
  def new
    @note = Note.new

    render inertia: 'Note',
      props: {
        note: @note.as_json,
        notes: notes_json
      }
  end

  # GET /notes/1/edit
  def edit
    render inertia: 'Note',
      props: {
        note: @note.as_json,
        notes: notes_json
      }
  end

  # POST /notes or /notes.json
  def create
    @note = Note.new(note_params.merge(date: Date.today))

    respond_to do |format|
      if @note.save
        format.html { render inertia: 'Note', props: {note: @note.as_json, notes: notes_json } }
        format.json { render :edit, status: :created, location: @note }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @note.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /notes/1 or /notes/1.json
  def update
    respond_to do |format|
      if @note.update(note_params)
        format.html { redirect_to edit_note_path(@note), turbolinks: false }
        format.json { render :edit, status: :ok, location: @note }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @note.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /notes/1 or /notes/1.json
  def destroy
    @note.destroy
    respond_to do |format|
      format.html { redirect_to new_note_path, notice: "Note was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_note
      @note = Note.find(params[:id])
    end

    def set_notes
      @notes ||= Note.all_plus_today
    end

    def notes_json
      set_notes.map do |note|
        note.as_json.slice('id', 'date_string')
      end
    end

    # Only allow a list of trusted parameters through.
    def note_params
      params.require(:note).permit(:body, :date)
    end
end
