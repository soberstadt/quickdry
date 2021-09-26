class Note < ApplicationRecord
  class << self
    def all_plus_today
      add_today all.order(date: :desc)
    end

    private

    def add_today(notes)
      return notes if notes.any? { |note| note_is_today?(note) }
      [today_note] + notes
    end

    def note_is_today?(note)
      note.date == Date.today
    end

    def today_note
      Note.new
    end
  end

  def attributes
    super.merge(date_string: date_string)
  end

  def date_string
    date.to_s.presence || 'Today'
  end
end
