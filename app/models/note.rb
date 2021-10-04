class Note < ApplicationRecord
  class << self
    def all_plus_today
      add_today all_non_blank.order(date: :desc)
    end

    def all_non_blank
      exportable.or(where(date: Date.today))
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

  scope :exportable, -> { where.not(body: '') }

  after_commit { ExportToFileJob.perform_later }

  def attributes
    super.merge(date_string: date_string)
  end

  def date_string
    return 'Today' if date.nil? || date == Date.today
    return 'Yesterday' if date == (Date.today - 1.day)
    return date.strftime('%B %e') if date.year == Date.today.year
    date.to_s
  end

  def as_markdown
    "#{markdown_title}\n\n#{body.strip}"
  end

  private

  def markdown_title
    "# QUICKDRY NOTE FOR #{date}"
  end
end
