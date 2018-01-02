class Api::CartItemsController < ApplicationController
  def index
    @cart_items = CartItem.all
  end

  def create
    @cart_item = CartItem.new(cart_item_params)
    @cart_item.save
  end

  def destroy
    @cart_item = CartItem.find(params[:id])
    @cart_item.destroy
  end

  private

  def cart_item_params
    params.require(:cart_item).permit(:user_id, :product_id, :size, :quantity)
  end
end
