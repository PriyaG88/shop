class CartItem < ApplicationRecord
  validates :product_id, :cart_id, :quantity, presence: true
  belongs_to :cart
end
