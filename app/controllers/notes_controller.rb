class NotesController < ApplicationController
  before_action :set_note, only: %i[ edit update destroy ]
  before_action :set_notes, only: %i[ new edit ]

  # GET /notes/new
  def new
    @note = Note.new

    render inertia: 'Note',
      props: {
        note: { text: @note.body },
        notes: @notes.map { |note| note.as_json(only: [:id, :date])}
      }
  end

  # GET /notes/1/edit
  def edit
    render inertia: 'Note',
      props: {
        note: { text: @note.body },
        notes: @notes.map { |note| note.as_json(only: [:id, :date])}
      }
  end

  # POST /notes or /notes.json
  def create
    @note = Note.new(note_params)

    respond_to do |format|
      if @note.save
        format.html { redirect_to edit_note_path(@note), notice: "Note was successfully created." }
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
        format.html { redirect_to @note, notice: "Note was successfully updated." }
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
      @notes = Note.all
    end

    # Only allow a list of trusted parameters through.
    def note_params
      params.require(:note).permit(:body, :date)
    end
end
