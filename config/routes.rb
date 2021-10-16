Rails.application.routes.draw do
  resources :notes, except: %i[index edit]
  resources :search, only: [:index]
  resources :tasks, only: %i[index create]
end
