import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function ProductList() {
    let { category } = useParams();
    return (
        <div className="album py-5 bg-body-tertiary">
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <div className="col">
                        <div className="card shadow-sm">
                            <Link to={`/product/${category}/1`}>
                                <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
                                    role="img" aria-label="Placeholder: 商品列表頁" preserveAspectRatio="xMidYMid slice" focusable="false">
                                    <title>Placeholder</title>
                                    <rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef"
                                        dy=".3em">商品列表頁{category}</text>
                                </svg>
                            </Link>
                            <div className="card-body">
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional
                                    content. This content is a little bit longer.</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <Link to={`/${category}/1`}>
                                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                        </Link>
                                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                    </div>
                                    <small className="text-body-secondary">9 mins</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-sm">
                            <Link to='/product/2'>
                                <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
                                    role="img" aria-label="Placeholder: 商品列表頁" preserveAspectRatio="xMidYMid slice" focusable="false">
                                    <title>Placeholder</title>
                                    <rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef"
                                        dy=".3em">商品列表頁</text>
                                </svg>
                            </Link>
                            <div className="card-body">
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional
                                    content. This content is a little bit longer.</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <Link to='/product/2'>
                                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                        </Link>
                                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                    </div>
                                    <small className="text-body-secondary">9 mins</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-sm">
                            <Link to='/product/3'>
                                <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
                                    role="img" aria-label="Placeholder: 商品列表頁" preserveAspectRatio="xMidYMid slice" focusable="false">
                                    <title>Placeholder</title>
                                    <rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef"
                                        dy=".3em">商品列表頁</text>
                                </svg>
                            </Link>
                            <div className="card-body">
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional
                                    content. This content is a little bit longer.</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <Link to='/product/3'>
                                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                        </Link>
                                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                    </div>
                                    <small className="text-body-secondary">9 mins</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-sm">
                            <Link to='/product/id'>
                                <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
                                    role="img" aria-label="Placeholder: 商品列表頁" preserveAspectRatio="xMidYMid slice" focusable="false">
                                    <title>Placeholder</title>
                                    <rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef"
                                        dy=".3em">商品列表頁</text>
                                </svg>
                            </Link>
                            <div className="card-body">
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional
                                    content. This content is a little bit longer.</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <Link to='/product/id'>
                                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                        </Link>
                                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                    </div>
                                    <small className="text-body-secondary">9 mins</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-sm">
                            <Link to='/product/id'>
                                <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
                                    role="img" aria-label="Placeholder: 商品列表頁" preserveAspectRatio="xMidYMid slice" focusable="false">
                                    <title>Placeholder</title>
                                    <rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef"
                                        dy=".3em">商品列表頁</text>
                                </svg>
                            </Link>
                            <div className="card-body">
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional
                                    content. This content is a little bit longer.</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <Link to='/product/id'>
                                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                        </Link>
                                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                    </div>
                                    <small className="text-body-secondary">9 mins</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-sm">
                            <Link to='/product/id'>
                                <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
                                    role="img" aria-label="Placeholder: 商品列表頁" preserveAspectRatio="xMidYMid slice" focusable="false">
                                    <title>Placeholder</title>
                                    <rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef"
                                        dy=".3em">商品列表頁</text>
                                </svg>
                            </Link>
                            <div className="card-body">
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional
                                    content. This content is a little bit longer.</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <Link to='/product/id'>
                                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                        </Link>
                                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                    </div>
                                    <small className="text-body-secondary">9 mins</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-sm">
                            <Link to='/product/id'>
                                <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
                                    role="img" aria-label="Placeholder: 商品列表頁" preserveAspectRatio="xMidYMid slice" focusable="false">
                                    <title>Placeholder</title>
                                    <rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef"
                                        dy=".3em">商品列表頁</text>
                                </svg>
                            </Link>
                            <div className="card-body">
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional
                                    content. This content is a little bit longer.</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <Link to='/product/id'>
                                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                        </Link>
                                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                    </div>
                                    <small className="text-body-secondary">9 mins</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-sm">
                            <Link to='/product/id'>
                                <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
                                    role="img" aria-label="Placeholder: 商品列表頁" preserveAspectRatio="xMidYMid slice" focusable="false">
                                    <title>Placeholder</title>
                                    <rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef"
                                        dy=".3em">商品列表頁</text>
                                </svg>
                            </Link>
                            <div className="card-body">
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional
                                    content. This content is a little bit longer.</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <Link to='/product/id'>
                                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                        </Link>
                                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                    </div>
                                    <small className="text-body-secondary">9 mins</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-sm">
                            <Link to='/product/id'>
                                <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
                                    role="img" aria-label="Placeholder: 商品列表頁" preserveAspectRatio="xMidYMid slice" focusable="false">
                                    <title>Placeholder</title>
                                    <rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef"
                                        dy=".3em">商品列表頁</text>
                                </svg>
                            </Link>
                            <div className="card-body">
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional
                                    content. This content is a little bit longer.</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <Link to='/product/id'>
                                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                        </Link>
                                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                    </div>
                                    <small className="text-body-secondary">9 mins</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductList;