@cart_items.each do |cart_item|
  json.set! cart_item.id do
    json.id cart_item.id
    json.product cart_item.product
    json.quantity cart_item.quantity
    json.size cart_item.size
    json.user_id cart_item.user_id
  end
end
