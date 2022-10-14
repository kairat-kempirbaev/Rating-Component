import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Rating from './Rating'
import Thanks from './Thanks'
import store from './store'
import { Provider } from 'react-redux'

import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Rating />} />
          <Route path="/checkout" element={<Thanks />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)