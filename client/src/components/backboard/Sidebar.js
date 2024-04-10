import { NavLink } from "react-router-dom";

function Sidebar() {
    return (

        <div className="d-flex flex-column p-3 bg-body-tertiary" style={{ width: "20%", position: "absolute", top: "0px", bottom: "0px" }}>
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                <svg className="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap" /></svg>
                <span className="fs-4">Sidebar</span>
            </a>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <NavLink to="/admin/home" className="nav-link link-body-emphasis" aria-current="page">
                        <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home" /></svg>
                        首頁
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/admin/category" className="nav-link link-body-emphasis">
                        <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#speedometer2" /></svg>
                        商品分類
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/admin/product" className="nav-link link-body-emphasis" onClick={() => { localStorage.removeItem('category'); }}>
                        <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#table" /></svg>
                        商品列表
                    </NavLink>
                </li>
            </ul>
            <hr />

            <ul className="nav nav-pills flex-column">
                <li><a className="dropdown-item" href="#">登出</a></li>
            </ul>

        </div>

    )
}

export default Sidebar;