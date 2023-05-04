import axios from 'axios'

const clientAxios = axios.create(
	{
		baseURL: import.meta.env.VITE_BACKEND_URL_DEV
	}
)

export default clientAxios