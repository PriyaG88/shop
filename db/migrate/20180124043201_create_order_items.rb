class CreateOrderItems < ActiveRecord::Migration[5.1]
  def change
    create_table :order_items do |t|
      t.integer :order_id, null: false
      t.integer :product_id, null: false
      t.decimal :unit_price, precision: 10, scale: 2, null: false
      t.decimal :total_price, precision: 15, scale: 2, null: false
      t.integer :quantity, null: false
      t.timestamps
    end
    add_index :order_items, :order_id
    add_index :order_items, :product_id
  end
end
