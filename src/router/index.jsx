import { createBrowserRouter } from "react-router-dom";

import { Layout } from '../layout/Layout'
import { HomePage } from '../pages/home/HomePage'
import { LoginPage } from '../pages/auth/LoginPage'
import { RegisterPage } from '../pages/auth/RegisterPage'
import { NotFound404Page } from '../pages/404/NotFound404Page'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout/>,
		errorElement: <NotFound404Page/>,
		children: [
			{
				errorElement: <NotFound404Page/>,
				children: [
					{
						index: true,
						element: <HomePage/>
					},
					{
						path: '/login',
						element: <LoginPage/>
					},
					{
						path: '/register',
						element: <RegisterPage/>
					}
					]
			}
		]
	}
])