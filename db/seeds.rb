# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Product.destroy_all
Product.create!(
  category_id: 18,
  image_url: 'http://res.cloudinary.com/priyag88/image/upload/c_scale,h_400/v1512427041/_102134885_otwlsm.jpg',
  big_image_url: 'http://res.cloudinary.com/priyag88/image/upload/v1512427041/_102134885_otwlsm.jpg',
  title: 'NMD XR1',
  description: 'A fusion of style and the latest running technology collide for
  the NMD XR1 Sneaker.  A head-turning aesthetic makes these the perfect
  addition to your already top notch footwear game.',
  price: 150)
Product.create!(
  category_id: 18,
  image_url: 'http://res.cloudinary.com/priyag88/image/upload/c_scale,h_400/v1512429105/_9262468_x1hrcp.jpg',
  big_image_url: 'http://res.cloudinary.com/priyag88/image/upload/v1512429105/_9262468_x1hrcp.jpg',
  title: 'Classic Slip On',
  description: 'A minimal slip on sneaker with a perforated leather upper and
  contrast sole.  These sneakers will complement any and every outfit.',
  price: 60)
Product.create!(
  category_id: 18,
  image_url: 'http://res.cloudinary.com/priyag88/image/upload/c_scale,h_400/v1512429630/_101790154_h8s8td.jpg',
  big_image_url: 'http://res.cloudinary.com/priyag88/image/upload/v1512429630/_101790154_h8s8td.jpg',
  title: 'Premium LX Blazer',
  description: 'This retro, mid top sneaker becomes a modern, street style
  essential in monochromatic blue.',
  price: 110)
Product.create!(
  category_id: 18,
  image_url: 'http://res.cloudinary.com/priyag88/image/upload/c_scale,h_400/v1512430171/_100265104_rrhtqy.jpg',
  big_image_url: 'http://res.cloudinary.com/priyag88/image/upload/v1512430171/_100265104_rrhtqy.jpg',
  title: 'Superstar',
  description: 'This shell-toed, striped sneaker looks good with just about
  anything.  Add these go-to classics to your wardrobe to up your wardrobe.',
  price: 80)
