import Pagination from "../../components/backboard/Pagination";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";


function Category() {
    const [data, setData] = useState([])
    const [reload, setReload] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/category')
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.error(err)
            })
    }, [reload])

    const handleDelete = (e, id) => {
        e.preventDefault()
        const isConfirmed = window.confirm('確定要刪除此產品分類？')
        if (isConfirmed) {
            axios.delete(`http://localhost:8000/category/${id}`)
                .then((res) => {
                    alert('刪除成功');
                    setReload(prev => !prev);
                })
                .catch((err) => {
                    console.error(err)
                })
        }
    }

    return (
        <div className="d-flex flex-column p-3 bg-body-tertiary" style={{ width: "80%", position: "absolute", right: "0px", top: "0px", bottom: "0px" }}>
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                <svg className="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap" /></svg>
                <span className="fs-4">商品分類</span>
            </a>
            <hr />
            <div style={{ width: "70%", marginLeft: "10%" }}>
                <div className="d-flex justify-content- my-3">
                    <Link to='/admin/category/create'>
                        <button type="button" className="btn btn-danger mb-3 align-self-center">新增類別</button>
                    </Link>
                </div>
                <p className="fs-3">商品類別</p>


                <ul className="list-group">
                    {data.map((item) => {
                        return (
                            <li key={item._id} className="list-group-item d-flex">
                                {/* <input className="form-check-input me-1" type="checkbox" value="" id={item._id} /> */}
                                <label className="ms-2 form-check-label" htmlFor={item._id}>{item.name}</label>
                                <Link to={`/admin/category/${item._id}`} className="ms-auto">
                                    <button type="button" className="btn btn-primary btn-sm">編輯</button>
                                </Link>
                                <button type="button" onClick={(e) => handleDelete(e, item._id)} className="ms-2 btn btn-secondary btn-sm">刪除</button>
                            </li>
                        )
                    })}
                </ul>

            </div>
            <Pagination></Pagination>
        </div>
    )
}

export default Category;