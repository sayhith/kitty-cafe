Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'products/index'
      post 'products/create'
      delete '[products]/:id', to: 'products#destroy'
    end
  end

  root 'products#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end