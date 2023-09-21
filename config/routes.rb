Rails.application.routes.draw do
  root to: 'pages#home'
  get 'pages/home', to: 'pages#home', as: 'home'
  get 'pages/kidspeak'
  get 'pages/wavebnb'
  get 'pages/download', as: :download

end
