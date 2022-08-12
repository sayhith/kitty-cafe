Rails.application.routes.draw do
  root to: 'site#index'

  get 'cats', to: 'site#index'

  get 'recipes', to: 'site#index'
  
  get 'market', to: 'site#index'


  namespace :api do
    resources :cats, only: %i[index show create destroy update]
    resources :recipes, only: %i[index show create destroy update]
    resources :market, only: %i[index show create destroy update]

  end
end