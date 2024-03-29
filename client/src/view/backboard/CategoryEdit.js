import { useLocation } from "react-router-dom"
import React, { useState } from 'react';
import axios from 'axios';

function CategoryEdit() {
    const { state } = useLocation();
    const categoryName = state?.category?.name || ''

    const [value, setValue] = useState(categoryName || '')
    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/category/create', { name: value })
            .then((res) => {
                window.history.back();
            })
            .catch((err) => {
                console.error(err)
            })
    }


    return (
        <div className="d-flex flex-column p-3 bg-body-tertiary" style={{ width: "80%", position: "absolute", right: "0px", top: "0px", bottom: "0px" }}>
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                <svg className="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap" /></svg>
                <span className="fs-4">商品分類 新增/編輯</span>
            </a>
            <hr />
            <div style={{ width: "70%", marginLeft: "10%" }}>
                <div className="mb-3">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="formFile" className="form-label">商品分類名稱：</label>
                        <input className="form-control" type="text" id="formFile" placeholder="交趾陶、水晶..." value={value} onChange={handleChange} />
                        <div className="d-flex mt-3">
                            <button type="submit" className="ms-auto btn btn-primary btn-sm">確認</button>
                            <button type="button" className="ms-2 btn btn-secondary btn-sm">取消</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}
export default CategoryEdit