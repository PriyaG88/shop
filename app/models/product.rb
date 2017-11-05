# == Schema Information
#
# Table name: products
#
#  id          :integer          not null, primary key
#  category_id :integer          not null
#  image_url   :string           not null
#  title       :string           not null
#  price       :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Product < ApplicationRecord
  validates :category_id, :image_url, :title, :price, presence: true

  belongs_to :category
end
