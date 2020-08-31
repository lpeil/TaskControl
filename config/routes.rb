Rails.application.routes.draw do
  root 'homepage#index'
  
  get '/api/sign/out' => 'sessions#destroy'
  post '/api/sign/in' => 'sessions#create'
  post '/api/sign/up' => 'users#create'
  get '/api/sign/check' => 'application#check_user'

  get '/*all', to: 'homepage#index'
end
