import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function AddEmployee() {
    const [data , setData] = useState({
        name: '',
        password: '',
        salary: '',
        email: '',
        address: '',
        image: ''
    })

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("name" , data.name);
        formData.append("password" , data.password);
        formData.append("email" , data.email);
        formData.append("salary" , data.salary);
        formData.append("address" , data.address);
        formData.append("image" , data.image);
        axios.post(`http://localhost:3001/create` , formData)
        .then(res =>
            { navigate('/employee')}
        )
        .catch(err => console.log(err))
    }
  return (
    <div className='d-flex flex-column align-items-center pt-5'>
        <h2>Add Employee</h2>
        <form className='row g-3 w-50' onSubmit={handleSubmit}>
            <div className='col-12'>
                <label htmlFor='inputName' className='form-label'>Name</label>
                <input type="text" className='form-control' id='inputName' placeholder='Enter Name' autoComplete='off' onChange={e => setData({...data , name: e.target.value})}/>
            </div>
            <div className='col-12'>
                <label htmlFor='inputPassword' className='form-label'>Password</label>
                <input type="password" className='form-control' id='inputPassword' placeholder='Enter Password' onChange={e => setData({...data , password: e.target.value})}/>
            </div>
            <div className='col-12'>
                <label htmlFor='inputEmail' className='form-label'>Email</label>
                <input type="text" className='form-control' id='inputEmail' placeholder='Enter Email' autoComplete='off' onChange={e => setData({...data , email: e.target.value})}/>
            </div>
            <div className='col-12'>
                <label htmlFor='inputSalary' className='form-label'>Salary</label>
                <input type="text" className='form-control' id='inputSalary' placeholder='Enter Salary' onChange={e => setData({...data , salary: e.target.value})}/>
            </div>
            <div className='col-12'>
                <label htmlFor='inputAddress' className='form-label'>Address</label>
                <input type="text" className='form-control' id='inputAddress' placeholder='123 mai St' onChange={e => setData({...data , address: e.target.value})}/>
            </div>
            <div className='col-12'>
                <label htmlFor='inputGroupFile' className='form-label'>Select Image</label>
                <input type="file" className='form-control' id='inputGroupFile' onChange={e => setData({...data , image: e.target.files[0]})}/>
            </div>
            <div className='col-12'>
                <button type='submit' className='btn btn-primary form-control'>Create</button>
            </div>
        </form>
    </div>
  )
}

export default AddEmployee