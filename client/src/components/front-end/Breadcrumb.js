import { Link, useLocation } from "react-router-dom";

function Breadcrumb() {
    const location = useLocation();

    return (
        <div className="container">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className={`breadcrumb-item ${location.pathname === '/' ? 'active' : ''}`}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={`breadcrumb-item ${location.pathname === '/product' ? 'active' : ''}`}>
                        <Link to="/product">商品類別</Link>
                    </li>
                    <li className={`breadcrumb-item ${location.pathname === '/product/id' ? 'active' : ''}`}>
                        商品內頁
                    </li>
                </ol>
            </nav>
        </div>
    )
}

export default Breadcrumb;
