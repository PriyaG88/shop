class CreateOrders < ActiveRecord::Migration[5.1]
  def change
    create_table :orders do |t|
      t.integer :user_id, null: false
      t.decimal :subtotal, precision: 15, scale: 2, null: false
      t.decimal :sales_tax, precision: 4, scale: 2, null: false
      t.timestamps
    end
    add_index :orders, :user_id
  end
end
