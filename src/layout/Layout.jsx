import { Outlet } from 'react-router-dom';
import { NavbarComponent } from '../components/NavbarComponent'

export function Layout () {

	return (
		<>
			<header>
				<NavbarComponent/>
			</header>
			<main className="main">
				<Outlet/>
			</main>
		</>
		)
}