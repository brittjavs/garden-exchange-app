class Offer < ApplicationRecord
    belongs_to :listing
    belongs_to :sender, :class_name => 'User'
    belongs_to :recipient, :class_name => 'User'

    validates :category, :item, :qty, presence: true
end
