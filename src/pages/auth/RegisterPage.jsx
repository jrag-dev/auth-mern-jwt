import { useState, useEffect, useContext } from 'react'
import AuthContext from '../../context/auth/authContext'
import './Auth.scss'
import { toast } from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';


const initialState = {
	firstname: '',
	lastname: '',
	email: '',
	password: ''
}

export function RegisterPage () {
	const { user, error, loading, registerUserFn } = useContext(AuthContext)
	const [dataForm, setDataForm] = useState(initialState)
	const { firstname, lastname, email, password } = dataForm;
	
	let navigate = useNavigate()
	const { search } = useLocation();
	const redirectInUrl = new URLSearchParams(search).get('redirect');
	const redirect = redirectInUrl ? redirectInUrl : '/';
	
	useEffect(() => {
		if (user) {
			toast.success(`Welcome, ${user.firstname}`)
			navigate( redirect || '/')
		}
		
		if (error) {
			toast.error(error)
			return;
		}
	}, [user, error])
	
	const handleChange = (event) => {
		setDataForm({
			...dataForm,
			[event.target.name]: event.target.value
		})
		console.log(event.target.value)
	}
	
	const handleSubmitRegister = (event) => {
		event.preventDefault()
		
		// validaciones
		
		// pasamos la data al action
		registerUserFn(dataForm)
		
		// reseteamos el state
		setDataForm(initialState)
	}

	return (
		<section className="auth">
			<form
				className="auth-form"
				onSubmit={handleSubmitRegister}
			>
				<h2 className="auth-title">Register</h2>
				<p>Create your new account in MernApp</p>
				<div className="form_group">
					<label htmlFor="firstname">FirstName</label>
					<input
						className="form-input"
						name="firstname"
						type="text"
						id="firstname"
						placeholder="Enter your firstname"
						onChange={handleChange}
						value={firstname}
					/>
				</div>
				<div className="form_group">
					<label htmlFor="lastname">LastName</label>
					<input
						className="form-input"
						name="lastname"
						type="text"
						id="lastname"
						placeholder="Enter your lastname"
						onChange={handleChange}
						value={lastname}
					/>
				</div>
				<div className="form_group">
					<label htmlFor="email">Email</label>
					<input
						className="form-input"
						name="email"
						type="email"
						id="email"
						placeholder="Enter your email"
						onChange={handleChange}
						value={email}
					/>
				</div>
				<div className="form_group">
					<label htmlFor="password">Password</label>
					<input
						className="form-input"
						name="password"
						type="password"
						id="password"
						placeholder="Enter your password"
						onChange={handleChange}
						value={password}
					/>
				</div>
				<button className="btn-auth" type="submit">Create account</button>
				
				<div>
					<p></p>
				</div>
			</form>
		</section>
		)
}