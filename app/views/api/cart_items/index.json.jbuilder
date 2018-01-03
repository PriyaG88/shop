json.array! @cart_items do |cart_item|
  json.id cart_item.id
  json.product cart_item.product
  json.quantity cart_item.quantity
  json.size cart_item.size
end
