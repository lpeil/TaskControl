if Rails.env === 'production' 
  Rails.application.config.session_store :cookie_store, key: 'task_controll', domain: ''
else
  Rails.application.config.session_store :cookie_store, key: 'task_controll' 
end
