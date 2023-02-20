Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'pages#index'

  scope :api do
    scope :v1 do
      resources :students
      resources :courses
    end
  end

  get '*path', to: 'pages#index', via: :all
end
