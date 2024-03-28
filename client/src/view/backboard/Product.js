import Pagination from "../../components/backboard/Pagination"

function Product() {
    return (
        <div className="d-flex flex-column p-3 bg-body-tertiary" style={{ width: "80%", position: "absolute", right: "0px", top: "0px", bottom: "0px" }}>
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                <svg className="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap" /></svg>
                <span className="fs-4">商品列表</span>
            </a>
            <hr />
            <div style={{ width: "70%", marginLeft: "10%" }}>
                <div className="d-flex my-3">
                    <select className="form-select" style={{ maxWidth: "300px" }}>
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <form className="ms-auto col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search" style={{ maxWidth: "350px" }}>
                        <input type="search" className="form-control" placeholder="搜尋商品名稱或編號" aria-label="Search" />
                    </form>
                    <button type="button" className="btn btn-danger mb-3">新增商品</button>
                </div>

                <p className="fs-3">OO分類-商品列表</p>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex">An item
                        <button type="button" className="ms-auto btn btn-primary btn-sm">編輯</button>
                        <button type="button" className="ms-2 btn btn-secondary btn-sm">刪除</button>
                    </li>
                    <li className="list-group-item d-flex">An item
                        <button type="button" className="ms-auto btn btn-primary btn-sm">編輯</button>
                        <button type="button" className="ms-2 btn btn-secondary btn-sm">刪除</button>
                    </li>
                    <li className="list-group-item d-flex">An item
                        <button type="button" className="ms-auto btn btn-primary btn-sm">編輯</button>
                        <button type="button" className="ms-2 btn btn-secondary btn-sm">刪除</button>
                    </li>
                    <li className="list-group-item d-flex">An item
                        <button type="button" className="ms-auto btn btn-primary btn-sm">編輯</button>
                        <button type="button" className="ms-2 btn btn-secondary btn-sm">刪除</button>
                    </li>
                    <li className="list-group-item d-flex">An item
                        <button type="button" className="ms-auto btn btn-primary btn-sm">編輯</button>
                        <button type="button" className="ms-2 btn btn-secondary btn-sm">刪除</button>
                    </li>
                    <li className="list-group-item d-flex">An item
                        <button type="button" className="ms-auto btn btn-primary btn-sm">編輯</button>
                        <button type="button" className="ms-2 btn btn-secondary btn-sm">刪除</button>
                    </li>
                    <li className="list-group-item d-flex">An item
                        <button type="button" className="ms-auto btn btn-primary btn-sm">編輯</button>
                        <button type="button" className="ms-2 btn btn-secondary btn-sm">刪除</button>
                    </li>
                    <li className="list-group-item d-flex">An item
                        <button type="button" className="ms-auto btn btn-primary btn-sm">編輯</button>
                        <button type="button" className="ms-2 btn btn-secondary btn-sm">刪除</button>
                    </li>
                    <li className="list-group-item d-flex">An item
                        <button type="button" className="ms-auto btn btn-primary btn-sm">編輯</button>
                        <button type="button" className="ms-2 btn btn-secondary btn-sm">刪除</button>
                    </li>
                    <li className="list-group-item d-flex">An item
                        <button type="button" className="ms-auto btn btn-primary btn-sm">編輯</button>
                        <button type="button" className="ms-2 btn btn-secondary btn-sm">刪除</button>
                    </li>
                </ul>


            </div>
            <Pagination></Pagination>
        </div>
    )
}
export default Product