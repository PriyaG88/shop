class Api::ProductsController < ApplicationController

  def index
    @products = Product.all
  end

  def show
    @product = Product.find(params[:id])
  end


  private

  def product_params
    params.require(:product).permit(:category_id, :image_url, :big_image_url,
    :title, :price, :description)
  end
end
