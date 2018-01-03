json.array! @cart_items do |cart_item|
  json.id cart_item.id
  json.product_title cart_item.product.title
  json.product_id cart_item.product_id
  json.quantity cart_item.quantity
  json.size cart_item.size
end
