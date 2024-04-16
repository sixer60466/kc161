import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordMatch, setPasswordMatch] = useState(true);
    const navigate = useNavigate();



    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        setPasswordMatch(e.target.value === password);
    };

    const handleRegiste = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/user/register', { username, password }, {
            // withCredentials: true,
        })
            .then((res) => {
                console.log(res)
                alert('註冊成功')
                navigate('/admin/login')
            })
            .catch((err) => {
                console.error(err)
                alert('註冊失敗')
            })

    }


    return (
        <div>

            <div className="container-fluid">
                <header className="d-flex justify-content-center py-3 mb-4 border-bottom ">
                    <a href="/" className="text-center d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
                        <span className="fs-4">註冊測試</span>
                    </a>
                </header>
            </div>
            <div className="container d-flex align-items-center justify-content-center" style={{ height: "98vh" }}>
                <main className="form-signin w-50">
                    <form onSubmit={handleRegiste}>
                        <h1 className="h3 mb-3 fw-normal">註冊帳密</h1>

                        <div className="form-floating">
                            <input type="email" value={username} onChange={(e) => setUsername(e.target.value)} className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label htmlFor="floatingInput">電子信箱</label>
                        </div>
                        <div className="form-floating mt-3">
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="floatingPassword" placeholder="Password" />
                            <label htmlFor="floatingPassword">密碼</label>
                        </div>
                        <div className="form-floating mt-3">
                            <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} className="form-control" id="floatingPassword1" placeholder="Password" />
                            <label htmlFor="floatingPassword1">確認密碼</label>
                        </div>
                        {!passwordMatch && <p style={{ color: 'red' }}>確認密碼與密碼不符</p>}

                        <button className="btn btn-primary w-100 py-2 mt-3" type="submit">註冊</button>
                        <p className="mt-5 mb-3 text-body-secondary">&copy; 2017–2024</p>
                    </form>
                </main>
            </div>
        </div>

    )
}

export default Register