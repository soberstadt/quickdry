class ExportToFileJob < ApplicationJob
  queue_as :default

  def perform(*args)
    text = notes_to_text(notes_scope)
    write_file(text)
  end

  private

  def notes_to_text(notes)
    notes.map(&:as_markdown).join("\n\n\n\n")
  end

  def write_file(markdown_text)
    File.write(filepath, markdown_text, mode: 'w+')
  end

  def notes_scope
    Note.exportable.order(created_at: :desc)
  end

  def filepath
    "#{Dir.home}/Documents/quickdry.md"
  end
end
