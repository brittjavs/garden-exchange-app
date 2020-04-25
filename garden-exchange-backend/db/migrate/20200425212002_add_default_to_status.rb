class AddDefaultToStatus < ActiveRecord::Migration[6.0]
  def change
    change_column_default :offers, :status, from: nil, to: "pending"
  end
end
