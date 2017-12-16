# == Schema Information
#
# Table name: products
#
#  id            :integer          not null, primary key
#  category_id   :integer          not null
#  image_url     :string           not null
#  title         :string           not null
#  price         :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  description   :text
#  big_image_url :string
#

class Product < ApplicationRecord
  validates :category_id, :image_url, :title, :price, :big_image_url, :description, presence: true
  validates :title, uniqueness: true

  belongs_to :category
end
