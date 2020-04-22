# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: "Billie", city: "Los Angeles", state: "CA", password: "woof")
User.create(username: "Nugget", city: "Seattle", state: "WA", password: "bark")
User.create(username: "Britt", city: "Los Angeles", state: "CA", password: "hello")
Listing.create(date: Date.today, category: "herb", item: "Oregano Seed Packet", details: "The packet has 12 seeds", qty: 1, wants: "Cilantro Seeds", user_id: 3)
Listing.create(date: Date.today, category: "herb", item: "Rosemary Bush", details: "Small plant, 6 inches tall", qty: 1, wants: "Serrano Chile Plant", user_id: 2)
Listing.create(date: Date.today, category: "fruit", item: "Blueberry Bush", details: "Medium size, 12 inches tall", qty: 1, wants: "Raspberry Bush", user_id: 1)
Offer.create(date: Date.today, category: "herb", item: "Cilantro Seeds", details: "I have 10 cilantro seeds", qty: 1, listing_id: 1, status: "pending", sender_id: 3, recipient_id: 1)
Offer.create(date: Date.today, category: "herb", item: "Serrano Chile Plant", details: "I have a newly sprouted serrano plant", qty: 1, listing_id: 2, status: "pending", sender_id: 1, recipient_id: 2)
Offer.create(date: Date.today, category: "herb", item: "Raspberry Bush", qty: 1, listing_id: 3, status: "pending", sender_id: 2, recipient_id: 3)
