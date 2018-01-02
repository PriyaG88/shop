Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :products, only: [:index, :show]
    resources :categories, only: [:index, :show]
    resources :cart_item, only: [:index, :create]
  end
end
