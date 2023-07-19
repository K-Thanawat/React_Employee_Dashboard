import { useNavigate } from "react-router-dom"

function Start() {
    const navigate = useNavigate();

    return (
    <div>
        <div className="d-flex justify-content-center align-items-center vh-100 LoginPage">
            <div className='p-3 rounded w-25 border text-center bg-white'>
                <h1>Login As</h1>
                <div className="d-flex justify-content-between mt-5">
                    <button className='btn btn-primary btn-lg' onClick={e => navigate('/employeelogin')}>Employee</button>
                    <button className='btn btn-success btn-lg' onClick={e => navigate('/login')}>Admin</button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Start