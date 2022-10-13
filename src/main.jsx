import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { NewsApp } from './NewsApp'
import { store } from './store'
import './style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
      <BrowserRouter>
        <NewsApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
