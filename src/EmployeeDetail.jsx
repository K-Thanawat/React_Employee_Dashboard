import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import axios from 'axios'
import './style.css'

function EmployeeDetail() {
    const { id } = useParams();
    const [ employee , setEmployee] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('http://localhost:3001/employee/' + id)
        .then(res => setEmployee(res.data.Result[0]))
        .catch(err => console.log(err))
    })

    const handleLogout = () => {
        axios.get('http://localhost:3001/logout')
        .then(res => {
            navigate('/start');
        })
        .catch(err => console.log(err))
    }
  return (
    <div>
        <div className="d-flex justify-content-center flex-column align-items-center mt-3">
            <img src={`http://localhost:3001/images/` + employee.image} alt="" className='empImg' />
            <div className="d-flex flex-column align-items-center mt-5">
                <h3>Name : {employee.name}</h3>
                <h3>Email : {employee.email}</h3>
                <h3>Salary : {employee.salary}</h3>
            </div>
            <div>
                <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
            </div>
        </div>
    </div>
  )
}

export default EmployeeDetail