import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.scss'
import { RouterProvider } from 'react-router-dom'

import { router } from './router'
import AuthState from './context/auth/authState'

ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthState>
      <RouterProvider router={router}/>
    </AuthState>
)
