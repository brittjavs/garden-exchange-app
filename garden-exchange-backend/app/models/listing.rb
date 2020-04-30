class Listing < ApplicationRecord
    belongs_to :user
    has_many :offers

    validates :category, :item, :qty, presence: true
    validates_inculsion_of :category, :in => ['fruit', 'vegetable', 'herb', 'nut', 'legume']
end
