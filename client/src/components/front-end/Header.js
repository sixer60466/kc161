import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Header() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/category/all')
            .then((res) => {
                setCategories(res.data)
            })
            .catch((err) => {
                console.error(err)
            })
    }, [])



    return (
        <nav className="navbar navbar-dark bg-dark" aria-label="Dark offcanvas navbar">
            <div className="container">
                <Link className="navbar-brand" to="/">Demo</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbarDark" aria-controls="offcanvasNavbarDark" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasNavbarDark" aria-labelledby="offcanvasNavbarDarkLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarDarkLabel">Kaunchen昆程</h5>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            {categories.map((category) => {
                                return (
                                    <li key={category._id} className="nav-item">
                                        <Link className="nav-link" aria-current="page" to={`/product/${category.name}`}>{category.name}</Link>
                                    </li>)
                            })}
                        </ul>
                        {/* <form className="d-flex mt-3" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form> */}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;