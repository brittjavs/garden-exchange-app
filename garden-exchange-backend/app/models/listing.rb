class Listing < ApplicationRecord
    belongs_to :user
    has_many :offers

    validates :category, :item, :qty, presence: true
end
