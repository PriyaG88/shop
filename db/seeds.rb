# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(email: 'priyaprograms@gmail.com', password: 'password', first_name: 'Priya', last_name: 'Gurung')

Category.create(name: 'Footwear')

Product.create(category_id: 1, image_url: '../../app/assets/images/nike.jpg', title: 'Blazers', price: 98)
