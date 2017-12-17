json.array! @products do |product|
  json.id product.id
  json.title product.title
  json.category_id product.category_id
  json.image_url product.image_url
  json.big_image_url product.big_image_url
  json.price product.price

  json.category_name product.category.name

end
