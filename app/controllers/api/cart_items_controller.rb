class Api::CartItemsController < ApplicationController
  def index
    @cart_items = CartItem.all
  end

  def create
    @cart_item = CartItem.new(cart_item_params)
    @cart_item.user_id = current_user.id
    if @cart_item.save
      render :show
    else
      render json: @cart_item.errors.full_messages, status: 422
    end
  end

  def destroy
    @cart_item = CartItem.find(params[:id])
    @cart_item.destroy!
    render :show
  end

  private

  def cart_item_params
    params.require(:cartItem).permit(:user_id, :product_id, :size, :quantity)
  end
end
