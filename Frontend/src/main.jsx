import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider , createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from "./Components/Layout.jsx"
import ShopCategory from "./Pages/ShopCategory.jsx"
import Shop from './Pages/Shop.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
       <Route path="" element={<Shop />} />
      <Route path='/men' element={<ShopCategory/>}></Route>
      <Route path='/women' element={<ShopCategory/>}></Route>
      <Route path='/accessories' element={<ShopCategory/>}></Route>
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
