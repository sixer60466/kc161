import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Breadcrumb() {
    const { category, id } = useParams();
    const [data, setData] = useState([])
    console.log(category, id)

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:8000/product/${id}`)
                .then((res) => {
                    setData(res.data)
                })
                .catch((err) => {
                    console.error(err)
                })
        }
    }, [])

    return (
        <div className="container">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className='breadcrumb-item'>
                        <NavLink to="/" >Home</NavLink>
                    </li>
                    <li className='breadcrumb-item'>
                        <NavLink to={`/product/${category}`}>{category}</NavLink>
                    </li>
                    <li className='breadcrumb-item'>
                        {data.name}
                    </li>
                </ol>
            </nav>
        </div>
    )
}

export default Breadcrumb;
