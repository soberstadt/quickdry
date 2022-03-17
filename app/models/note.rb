# typed: true
class Note < ApplicationRecord
  extend T::Sig

  scope :recent_first, -> { order(date: :desc) }
  scope :exportable, -> { where.not(body: '') }
  scope :today_or_not_blank, -> { exportable.or(where(date: Date.today)) }

  after_commit { ExportToFileJob.perform_later }

  class << self
    extend T::Sig

    sig { returns(T::Array[Note]) }
    def all_plus_today
      add_today today_or_not_blank.recent_first
    end

    sig { returns(Note) }
    def today_note
      find_or_initialize_by(date: Date.today)
    end

    private

    def add_today(notes)
      notes = notes.to_a
      return notes if notes.any? { |note| note_is_today?(note) }
      [today_note] + notes
    end

    def note_is_today?(note)
      note.date == Date.today
    end
  end

  sig { returns(Hash) }
  def attributes
    super.merge(date_string: date_string)
  end

  sig { returns(String) }
  def date_string
    return 'Today' if date.nil? || date == Date.today
    return 'Yesterday' if date == (Date.today - 1.day)
    return T.must(date).strftime('%B %e') if date&.year == Date.today.year
    date.to_s
  end

  sig { returns(String) }
  def as_markdown
    "#{markdown_title}\n\n#{body&.strip}"
  end

  sig { returns(T.nilable(String)) }
  def first_line
    body.to_s.split("\n", 2).first&.truncate(40)
  end

  private

  def markdown_title
    "# QUICKDRY NOTE FOR #{date}"
  end
end
