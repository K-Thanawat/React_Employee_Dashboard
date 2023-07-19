import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from "react-router-dom";

function EditEmployee() {
    const [data , setData] = useState({
        name: '',
        password: '',
        salary: '',
        email: '',
        address: '',
        image: ''
    })

    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        axios.get(`http://localhost:3001/edit/` + id)
        .then(res =>
        { setData({...data ,
            name: res.data.Result[0].name,
            email: res.data.Result[0].email,
            address: res.data.Result[0].address,
            salary: res.data.Result[0].salary,
            })
        })
        // .then(res => console.log(res))
        .catch(err => console.log(err))
    } , [])

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:3001/update/` + id , data)
        .then(res => { 
            if(res.data.Status === 'Success'){
                navigate('/employee')
            }
        })
        .catch(err => console.log(err))
    }
  return (
    <div className='d-flex flex-column align-items-center pt-5'>
        <h2>Edit Employee</h2>
        <form className='row g-3 w-50' onSubmit={handleSubmit}>
            <div className='col-12'>
                <label htmlFor='inputName' className='form-label'>Name</label>
                <input type="text" className='form-control' id='inputName' placeholder='Enter Name' autoComplete='off' onChange={e => setData({...data , name: e.target.value})}
                value={data.name}/>
            </div>
            <div className='col-12'>
                <label htmlFor='inputEmail' className='form-label'>Email</label>
                <input type="text" className='form-control' id='inputEmail' placeholder='Enter Email' autoComplete='off' onChange={e => setData({...data , email: e.target.value})}
                value={data.email}/>
            </div>
            <div className='col-12'>
                <label htmlFor='inputSalary' className='form-label'>Salary</label>
                <input type="text" className='form-control' id='inputSalary' placeholder='Enter Salary' onChange={e => setData({...data , salary: e.target.value})}
                value={data.salary}/>
            </div>
            <div className='col-12'>
                <label htmlFor='inputAddress' className='form-label'>Address</label>
                <input type="text" className='form-control' id='inputAddress' placeholder='123 mai St' onChange={e => setData({...data , address: e.target.value})}
                value={data.address}/>
            </div>
            <div className='col-12'>
                <button type='submit' className='btn btn-primary form-control'>Update</button>
            </div>
        </form>
    </div>
  )
}

export default EditEmployee