
json.array! @categories do |category|
  json.id category.id
  json.name category.name

  json.products category.products do |product|
    json.id product.id
    json.category_id product.category_id
    json.image_url product.image_url
    json.title product.title
    json.price product.price
  end
end
