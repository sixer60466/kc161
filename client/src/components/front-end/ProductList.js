import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function ProductList() {
    const [products, setProducts] = useState([])
    const { category } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/product/category/${category}`)
            .then((res) => {
                setProducts(res.data)
            }).catch((err) => {
                console.error(err)
            })
    }, [])

    return (
        <div className="album py-5 bg-body-tertiary">
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {products.map((product) => {
                        return (
                            <div key={product._id} className="col">
                                <div className="card shadow-sm">
                                    <Link to={`/product/${category}/${product._id}`}>
                                        <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
                                            role="img" aria-label="Placeholder: 商品列表頁" preserveAspectRatio="xMidYMid slice" focusable="false">
                                            <title>Placeholder</title>
                                            <rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef"
                                                dy=".3em">{product.name}</text>
                                        </svg>
                                    </Link>
                                    <div className="card-body">
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional
                                            content. This content is a little bit longer.</p>

                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}

export default ProductList;