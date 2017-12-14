class AddBigImageToProducts < ActiveRecord::Migration[5.1]
  def change
    add_column :products, :big_image_url, :string
  end
end
