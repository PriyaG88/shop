# == Schema Information
#
# Table name: cart_items
#
#  id         :integer          not null, primary key
#  product_id :integer          not null
#  quantity   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  size       :string
#  user_id    :integer
#

class CartItem < ApplicationRecord
  validates :product_id, :quantity, :size, :user_id, presence: true
  belongs_to :product
  belongs_to :user
end
