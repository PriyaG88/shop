# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(email: 'priyaprograms@gmail.com', password: 'password', first_name: 'Priya', last_name: 'Gurung')
Category.destroy_all
Category.create(name: 'Footwear')
Category.create(name: 'Apparel')
Category.create(name: 'Accessories')

Product.destroy_all
Product.create(
  category_id: 1,
  image_url: 'http://res.cloudinary.com/priyag88/image/upload/c_scale,h_400/v1512427041/_102134885_otwlsm.jpg',
  title: 'NMD XR1',
  price: 150)
Product.create(
  category_id: 1,
  image_url: 'http://res.cloudinary.com/priyag88/image/upload/c_scale,h_400/v1512429105/_9262468_x1hrcp.jpg',
  title: 'Classic Slip On',
  price: 60)
Product.create(
  category_id: 1,
  image_url: 'http://res.cloudinary.com/priyag88/image/upload/c_scale,h_400/v1512429630/_101790154_h8s8td.jpg',
  title: 'Premium LX Blazer',
  price: 110)
Product.create(
  category_id: 1,
  image_url: 'http://res.cloudinary.com/priyag88/image/upload/c_scale,h_400/v1512430171/_100265104_rrhtqy.jpg',
  title: 'Superstar',
  price: 80)
