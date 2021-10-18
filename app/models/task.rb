# typed: strict
class Task < ApplicationRecord
  validates :description, presence: true
end
