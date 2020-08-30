Rails.application.routes.draw do
  root 'homepage#index'
  
  get '/api/sign/out' => 'sessions#destroy'
  post '/api/sign/in' => 'sessions#create'
  post '/api/sign/up' => 'users#create'

  get '/*all', to: 'homepage#index'
end
