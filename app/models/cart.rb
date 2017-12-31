class Cart < ApplicationRecord
  validates :user_id, presence: true
  has_many :cart_items
end
