import { Outlet } from 'react-router-dom';
import { NavbarComponent } from '../components/NavbarComponent'
import { Toaster } from 'react-hot-toast';


export function Layout () {

	return (
		<>
			<header>
				<NavbarComponent/>
			</header>
			<Toaster
			  position="top-center"
			  toastOptions={{
			    // Define default options
			    className: '',
			    duration: 3000,
			    style: {
			      background: '#363636',
			      color: '#fff',
			    },
			
			    // Default options for specific types
			    success: {
			      duration: 3000,
			      theme: {
			        primary: 'green',
			        secondary: 'black',
			      },
			    },
			  }}
			/>
			<main className="main container">
				<Outlet/>
			</main>
		</>
		)
}