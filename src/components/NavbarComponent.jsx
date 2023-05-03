import { NavLink } from 'react-router-dom'

import './NavbarComponent.scss'

export function NavbarComponent() {
	
	const user = null;
	
	return (
		<header className="header">
			<nav className="nav container">
				<h1>MernApp</h1>
				<ul className={`nav-links ${!user ? 'active' : ""}`}>
					<li>
						<NavLink to="/login">Login</NavLink>
					</li>
					<li>
						<NavLink to="/register">Register</NavLink>
					</li>
				</ul>

				<ul className={`nav-links ${user ? 'active' : ""}`}>
					<li>
						<NavLink to="/">Home</NavLink>
					</li>
					<li>
						<NavLink to="/">Logout</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	)
}