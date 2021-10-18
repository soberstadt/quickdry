# typed: true
class SearchController < ApplicationController
  include ActionView::Helpers::TextHelper

  def index
    render inertia: 'Search',
           props: {
             results: search_results,
             query: params[:query]
           }
  end

  private

  def search_results
    return Note.none if search_query.blank?
    as_search_json Note.where('body ilike ?', "%#{search_query}%")
  end

  def search_query
    params[:query]
  end

  def as_search_json(notes)
    notes.map do |note|
      note
        .as_json
        .slice('id', 'date_string')
        .merge(body_match: body_match(note))
    end
  end

  def body_match(note)
    around = 24

    before, match_text, after =
      note.body.partition(/#{Regexp.quote(search_query)}/i)
    before = "...#{before.last(around - 3)}" if before.length > around
    after = "#{after.first(around - 3)}..." if after.length > around

    match = { before: before, match: match_text, after: after }
  end
end
