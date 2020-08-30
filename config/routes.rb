Rails.application.routes.draw do
  root 'homepage#index'

  post '/api/sign/in', to: 'sessions#create'
  delete '/api/sign/out', to: 'sessions#destroy'
  get '/api/sign/check', to: 'sessions#is_logged_in?'
  
  resources :users, only: [:create, :show, :index]
end
