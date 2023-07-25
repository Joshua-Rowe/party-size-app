Rails.application.routes.draw do
  root "home_page#index"
  get 'home_page/index'
  get 'parties/:id', to: 'home_page#index'

  scope '/api' do
    resources :parties
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
