import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Sign_in() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/user/validateToken', {
            withCredentials: true
        })
            .then((res) => {
                //token有效，頁面導向後台首頁
                navigate('/admin/home')
            })
            .catch((err) => {
                if (err.response && err.response.status === 401) {
                    console.log('尚未登入')
                }
                else if (err.response && err.response.status === 403) {

                }
            })
    }, [navigate])

    const handleLogin = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/user/login', { username, password }, {
            withCredentials: true,
        })
            .then((res) => {
                alert('登入成功')
                navigate('/admin/home')
            })
            .catch((err) => {
                console.error(err)
                alert('登入失敗')
            })
    }


    return (
        <div>

            <div className="container-fluid">
                <header className="d-flex justify-content-center py-3 mb-4 border-bottom ">
                    <a href="/" className="text-center d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
                        <span className="fs-4">管理後台</span>
                    </a>
                </header>
            </div>
            <div className="container d-flex align-items-center justify-content-center" style={{ height: "98vh" }}>
                <main className="form-signin w-50">
                    <form onSubmit={handleLogin}>
                        <h1 className="h3 mb-3 fw-normal">註冊帳密</h1>

                        <div className="form-floating">
                            <input type="email" value={username} onChange={(e) => setUsername(e.target.value)} className="form-control" id="floatingInput" placeholder="name@example.com" required />
                            <label htmlFor="floatingInput">電子信箱</label>
                        </div>
                        <div className="form-floating mt-3">
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="floatingPassword" placeholder="Password" required />
                            <label htmlFor="floatingPassword">密碼</label>
                        </div>
                        <button className="btn btn-primary w-100 py-2 mt-3" type="submit">登入</button>
                        <p className="mt-5 mb-3 text-body-secondary">&copy; 2017–2024</p>
                    </form>
                </main>
            </div>
        </div>

    )
}

export default Sign_in