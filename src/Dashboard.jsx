import 'bootstrap-icons/font/bootstrap-icons.min.css'
import axios from 'axios'
import { useEffect } from 'react';
import { Link, Outlet, useNavigate , useParams} from 'react-router-dom'

function Dashboard() {
    const { id } = useParams();
    const navigate = useNavigate();
    axios.defaults.withCredentials = true;
    useEffect(() => {
        axios.get('http://localhost:3001/dashboard')
            .then(res => {
                if(res.data.Status === "Success"){
                    if(res.data.role === "admin"){
                        navigate('/');
                    }else{
                        const id = res.data.id;
                        navigate('/employeedetail/' + id)
                    }
                }else{
                    navigate(`/start`)
                }
            })
            .catch(err => console.log(err))
    } , [])

    const handleLogout = () => {
        axios.get('http://localhost:3001/logout')
        .then(res => {
            navigate('/start');
        })
        .catch(err => console.log(err))
    }
  return (
    <div className="container-fluid">
    <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-white shadow">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-primary text-decoration-none">
                    <span className="fs-5 d-none d-sm-inline">Admin Dashboard</span>
                </a>
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li className="nav-item">
                        <Link to="/" data-bs-toggle="collapse" className="nav-link align-middle px-0">
                            <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/employee" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">Manage Employees</span>
                        </Link>
                    </li>
                    <li onClick={handleLogout}>
                        <a href="#" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-power"></i> <span className="ms-1 d-none d-sm-inline">Logout</span>
                        </a>
                    </li>
                </ul>
                <hr />
            </div>
        </div>
        <div className="col p-0 m-0">
            <div className='p-2 d-flex justify-content-center shadow'>
                <h4>Employee Manage System</h4>
            </div>
            <Outlet />
        </div>
    </div>
</div>
  )
}

export default Dashboard