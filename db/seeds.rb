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
  anything.  Add these go-to classics to your wardrobe to up your shoe style.',
  price: 80)

Product.create!(
  category_id: 19,
  image_url: 'http://res.cloudinary.com/priyag88/image/upload/c_scale,h_400/v1513389626/_100278658_xhn1gu.jpg',
  big_image_url: 'http://res.cloudinary.com/priyag88/image/upload/v1513389626/_100278658_xhn1gu.jpg',
  title: 'Heart Logo Cardigan',
  description: 'The classic V neck cardigan gets an update with an understated heart logo, chest patch.',
  price: 398)

Product.create!(
  category_id: 19,
  image_url: 'http://res.cloudinary.com/priyag88/image/upload/c_scale,h_400/v1513390600/_101804080_gpoygh.jpg',
  big_image_url: 'http://res.cloudinary.com/priyag88/image/upload/v1513390600/_101804080_gpoygh.jpg',
  title: 'Gold Heart Patch Cardigan',
  description: 'The classic crew neck cardigan gets a touch of flair with a gold heart applique.',
  price: 362)

Product.create!(
  category_id: 19,
  image_url: 'http://res.cloudinary.com/priyag88/image/upload/c_scale,h_400/v1513389665/_101744601_rscxig.jpg',
  big_image_url: 'http://res.cloudinary.com/priyag88/image/upload/v1513389665/_101744601_rscxig.jpg',
  title: 'Black Heart Stripe Shirt',
  description: 'The go-to oxford shirt gets a modern update with a black heart chest applique.',
  price: 284)

Product.create!(
  category_id: 19,
  image_url: 'http://res.cloudinary.com/priyag88/image/upload/c_scale,h_400/v1513389655/_101804399-1_lkry5r.jpg',
  big_image_url: 'http://res.cloudinary.com/priyag88/image/upload/v1513389655/_101804399-1_lkry5r.jpg',
  title: 'Heart Stripe Shirt',
  description: 'This crisp button down gets a stylish accent with a wide-eyed, black heart logo.',
  price: 271)

Product.create!(
  category_id: 19,
  image_url: 'http://res.cloudinary.com/priyag88/image/upload/c_scale,h_400/v1513389674/_101074917_qgtzyn.jpg',
  big_image_url: 'http://res.cloudinary.com/priyag88/image/upload/v1513389674/_101074917_qgtzyn.jpg',
  title: 'Sportswear Tech Hoodie',
  description: 'This hoodie is fashionable and functional with Dri-FIT technology that keeps you dry on and off the courts.',
  price: 90)

Product.create!(
  category_id: 19,
  image_url: 'http://res.cloudinary.com/priyag88/image/upload/c_scale,h_400/v1513389618/_101323859_w39z03.jpg',
  big_image_url: 'http://res.cloudinary.com/priyag88/image/upload/v1513389618/_101323859_w39z03.jpg',
  title: 'Logo Graphic Tee',
  description: 'A lightweight, classic logo tee that pairs easily with just about anything.',
  price: 90)

Product.create!(
  category_id: 19,
  image_url: 'http://res.cloudinary.com/priyag88/image/upload/c_scale,h_400/v1513392448/_101940555_g5cz7b.jpg',
  big_image_url: 'http://res.cloudinary.com/priyag88/image/upload/v1513392448/_101940555_g5cz7b.jpg',
  title: 'Raglan Tee',
  description: 'A lightweight, raglan tee styled with varsity striping on the sleeves.',
  price: 55)

Product.create!(
  category_id: 19,
  image_url: 'http://res.cloudinary.com/priyag88/image/upload/c_scale,h_400/v1513392683/_102005259_m9q0dh.jpg',
  big_image_url: 'http://res.cloudinary.com/priyag88/image/upload/c_scale,h_736/v1513392683/_102005259_m9q0dh.jpg',
  title: 'Essentials Women\'s Parka',
  description: 'This parka comes equipped with a detachable hood, large pockets and duel zip and button closures.',
  price: 400)
