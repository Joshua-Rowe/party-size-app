Rails.application.routes.draw do
  resources :parties
  root "home_page#index"
  get 'home_page/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
