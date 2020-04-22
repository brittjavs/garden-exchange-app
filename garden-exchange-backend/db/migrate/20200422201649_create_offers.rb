class CreateOffers < ActiveRecord::Migration[6.0]
  def change
    create_table :offers do |t|
      t.date :date
      t.string :item
      t.string :category
      t.string :details
      t.integer :qty
      t.string :status
      t.integer :listing_id
      t.references :sender
      t.references :recipient

      t.timestamps
    end

    add_foreign_key :offers, :users, column: :sender_id, primary_key: :id
    add_foreign_key :offers, :users, column: :recipient_id, primary_key: :id
    
  end
end
