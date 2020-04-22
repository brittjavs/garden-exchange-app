class CreateListings < ActiveRecord::Migration[6.0]
  def change
    create_table :listings do |t|
      t.date :date
      t.string :item
      t.string :category
      t.string :details
      t.integer :qty
      t.string :wants
      t.integer :user_id

      t.timestamps
    end
  end
end
