Rails.application.routes.draw do
  Rails.application.routes.draw do
    namespace :api do
        resources :cars
    end
  end
end
