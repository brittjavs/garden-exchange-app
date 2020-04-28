class RemoveDateFromOfferAndListing < ActiveRecord::Migration[6.0]
  def change
    remove_column :offers, :date
    remove_column :listings, :date
  end
end
