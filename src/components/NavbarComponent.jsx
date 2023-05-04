import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import AuthContext from '../context/auth/authContext'
import './NavbarComponent.scss'
import { useNavigate } from 'react-router-dom'

export function NavbarComponent() {
	
	const { user, logoutSession } = useContext(AuthContext)
	let navigate = useNavigate()
	
	const logout = () => {
		logoutSession()
		navigate('/login')
	}
	
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
						<button onClick={logout}>Logout</button>
					</li>
				</ul>
			</nav>
		</header>
	)
}