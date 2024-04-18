import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function MainContent() {
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
        <div className="album py-5 bg-body-tertiary">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 g-3">
                    {categories.map((category) => {
                        return (
                            <div key={category._id} className="col">
                                <div className="card shadow-sm">
                                    <Link to={`/product/${category.name}`}>
                                        <svg className="bd-placeholder-img card-img-top" width="100%" height="325" xmlns="http://www.w3.org/2000/svg"
                                            role="img" aria-label="Placeholder: 首頁的商品類別" preserveAspectRatio="xMidYMid slice" focusable="false">
                                            <title>Placeholder</title>
                                            <rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef"
                                                dy=".3em">{category.name}</text>
                                        </svg>
                                    </Link>

                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default MainContent;