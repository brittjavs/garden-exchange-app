class User < ApplicationRecord
    has_secure_password
    has_many :listings
    has_many :sent_offers, :class_name => 'Offer', :foreign_key => 'sender_id'
    has_many :received_offers, :class_name => 'Offer', :foreign_key => 'recipient_id'
    

    validates :username, :city, :state, :password, presence: true
    validates :username, uniqueness: true
end
