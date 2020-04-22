# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_04_22_201649) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "listings", force: :cascade do |t|
    t.date "date"
    t.string "item"
    t.string "category"
    t.string "details"
    t.integer "qty"
    t.string "wants"
    t.integer "user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "offers", force: :cascade do |t|
    t.date "date"
    t.string "item"
    t.string "category"
    t.string "details"
    t.integer "qty"
    t.string "status"
    t.integer "listing_id"
    t.bigint "sender_id"
    t.bigint "recipient_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["recipient_id"], name: "index_offers_on_recipient_id"
    t.index ["sender_id"], name: "index_offers_on_sender_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "city"
    t.string "state"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "offers", "users", column: "recipient_id"
  add_foreign_key "offers", "users", column: "sender_id"
end
