import Pagination from "../../components/backboard/Pagination"
import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";


function Product() {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [reload, setReload] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/category')
            .then((res) => {
                setCategories(res.data)
            })
            .catch((err) => {
                console.error(err)
            })
    }, [])

    useEffect(() => {
        const params = searchParams.toString()
        axios.get(`http://localhost:8000/product?${params}`)
            .then((res) => {
                setProducts(res.data.products)
                setTotalPages(res.data.totalPages)
                setCurrentPage(res.data.currentPage)
            })
            .catch((err) => {
                console.error(err)
            })
    }, [searchParams, reload])

    const handleDelete = (e, id) => {
        e.preventDefault()
        const isConfirmed = window.confirm('確定要刪除此產品？')
        if (isConfirmed) {
            axios.delete(`http://localhost:8000/product/${id}`)
                .then((res) => {
                    alert('刪除成功');
                    setReload(prev => !prev);
                })
                .catch((err) => {
                    console.error(err)
                })
        }
    }

    const handlePageChange = (newPage) => {
        setSearchParams({ ...Object.fromEntries(searchParams), page: newPage })
    }

    const handleCategoryChange = (e) => {
        localStorage.setItem('category', e.target.value)
        setSearchParams({ category: e.target.value, page: 1 })
    }
    return (
        <div className="d-flex flex-column p-3 bg-body-tertiary" style={{ width: "80%", position: "absolute", right: "0px", top: "0px", bottom: "0px" }}>
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                <svg className="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap" /></svg>
                <span className="fs-4">商品列表</span>
            </a>
            <hr />
            <div style={{ width: "70%", marginLeft: "10%" }}>
                <div className="d-flex my-3">
                    <select className="form-select" style={{ maxWidth: "300px" }} value={localStorage.getItem('category') || 'all'} onChange={handleCategoryChange}>
                        <option value='all'>所有商品分類</option>
                        {categories.map((category) => {
                            return <option value={category._id} key={category._id}>{category.name}</option>
                        })}
                    </select>
                    <form className="ms-auto col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search" style={{ maxWidth: "350px" }}>
                        <input type="search" className="form-control" placeholder="搜尋商品名稱或編號" aria-label="Search" />
                    </form>
                    <Link to='/admin/product/create'>
                        <button type="button" className="btn btn-danger mb-3">新增商品</button>
                    </Link>
                </div>

                <p className="fs-3">OO分類-商品列表</p>

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col" style={{ width: "40%" }}>產品名稱</th>
                            <th scope="col" style={{ width: "20%" }}>產品編號</th>
                            <th scope="col" style={{ width: "20%" }}>產品價格 (元)</th>
                            <th scope="col" style={{ width: "20%" }}>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => {
                            return (
                                <tr key={index + 1}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{product.name}</td>
                                    <td>{product.productId}</td>
                                    <td>{product.price}</td>
                                    <td>
                                        <Link to={`/admin/product/${product._id}`}>
                                            <button type="button" className="btn btn-primary btn-sm">編輯</button>
                                        </Link>
                                        <button type="button" onClick={(e) => handleDelete(e, product._id)} className="ms-2 btn btn-secondary btn-sm">刪除</button>
                                    </td>
                                </tr>
                            );
                        })}

                    </tbody>
                </table>


            </div>
            <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange}></Pagination>
        </div>
    )
}
export default Product