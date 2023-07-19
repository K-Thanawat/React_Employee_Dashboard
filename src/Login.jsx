import { useState } from 'react'
import './style.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
    const [ values , setValues ] = useState({
        username: '',
        password: ''
    })

    const [ error , setError] = useState("")
    const navigate = useNavigate()
    axios.defaults.withCredentials = true;

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`http://localhost:3001/login` , values)
            .then(res => {
                console.log(res)
                if(res.data.Status === 'Success'){
                    navigate('/');
                }else{
                    setError(res.data.Error);
                }
            })
            .catch(err => console.log(err))
    }

    return (
    <div className="d-flex justify-content-center align-items-center vh-100 LoginPage">
        <div className='bg-white p-3 rounded w-25 border'>
            <div className='text-danger'>
                {error && error}
            </div>
            <h1>Admin Login</h1>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor="username"><strong>Username</strong></label>
                    <input type="text" placeholder='Enter username' name='username' className='form-control rounded-0' onChange={e => setValues({...values , username: e.target.value})}/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="password"><strong>Password</strong></label>
                    <input type="password" placeholder='Enter password' name='password' className='form-control rounded-0' onChange={e => setValues({...values , password: e.target.value})}/>
                </div>
                <button type='submit' className='btn btn-success w-100 rounded-0'>Log in</button>
                <p>You are agree to aour terms and policies</p>
                <button type='submit' className='btn btn-default border bg-light w-100 rounded-0 text-decoration'>Create Account</button>
            </form>
        </div>
    </div>
  )
}

export default Login