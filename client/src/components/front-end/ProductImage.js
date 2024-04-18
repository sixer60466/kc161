import { Link } from "react-router-dom";
import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function ProductImages() {
    const [product, setProduct] = useState({})
    const { id } = useParams();


    useEffect(() => {
        axios.get(`http://localhost:8000/product/${id}`)
            .then((res) => {
                setProduct(res.data)
            })
            .catch((err) => {
                console.error(err)
            })
    }, [])

    return (

        <div className="album py-5 bg-body-tertiary">
            <div className="container">
                <div className="row row-cols-1 g-3">
                    <div className="col">
                        <div className="card shadow-sm">
                            <svg className="bd-placeholder-img card-img-top" width="100%" height="800" xmlns="http://www.w3.org/2000/svg"
                                role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                                <title>Placeholder</title>
                                <rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef"
                                    dy=".3em">{product.name}</text>
                            </svg>
                            <div className="card-body">
                                <p className="card-text">商品名稱：{product.name}</p>
                                <p className="card-text">尺寸：{product.size}</p>
                                <p className="card-text">價格：{product.price}(元)</p>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProductImages;