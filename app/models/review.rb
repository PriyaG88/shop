class Review < ApplicationRecord
  validates :user_id, :product_id, :title, :body, presence: true
  validates :body, length: { minimum: 10 }

  belongs_to :user
  belongs_to :product
end
