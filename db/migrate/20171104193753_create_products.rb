class CreateProducts < ActiveRecord::Migration[5.1]
  def change
    create_table :products do |t|
      t.integer :category_id, null: false
      t.string :image_url, null: false
      t.string :title, null: false
      t.integer :price, null: false
      t.timestamps
    end
  end
end
