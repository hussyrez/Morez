Rails.application.routes.draw do
  
  mount PdfjsViewer::Rails::Engine => "/pdfjs", as: 'pdfjs'
  
  root to: 'main#index'
  resources :blogs
  resources :main
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
