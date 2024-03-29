import { Link, NavLink } from "react-router-dom";

function Sign_in() {
    return (
        <div>

            <div class="container-fluid">
                <header class="d-flex justify-content-center py-3 mb-4 border-bottom ">
                    <a href="/" class="text-center d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
                        <span class="fs-4">昆程管理後台</span>
                    </a>
                </header>
            </div>
            <div className="container d-flex align-items-center justify-content-center" style={{ height: "98vh" }}>
                <main class="form-signin w-50">
                    <form>
                        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

                        <div class="form-floating">
                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div class="form-floating">
                            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>

                        <div class="form-check text-start my-3">
                            <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                            <label class="form-check-label" htmlFor="flexCheckDefault">
                                Remember me
                            </label>
                        </div>
                        <NavLink to="/admin">測試</NavLink>
                        {/* <button class="btn btn-primary w-100 py-2" type="submit">Sign in</button> */}
                        <p class="mt-5 mb-3 text-body-secondary">&copy; 2017–2024</p>
                    </form>
                </main>
            </div>
        </div>

    )
}

export default Sign_in