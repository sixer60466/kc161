import Pagination from "../../components/backboard/Pagination";

function Category() {
    return (
        <div className="d-flex flex-column p-3 bg-body-tertiary" style={{ width: "80%", position: "absolute", right: "0px", top: "0px", bottom: "0px" }}>
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                <svg className="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap" /></svg>
                <span className="fs-4">商品分類</span>
            </a>
            <hr />
            <div style={{ width: "70%", marginLeft: "10%" }}>
                <div className="d-flex justify-content- my-3">
                    <button type="button" className="btn btn-danger mb-3 align-self-center">新增類別</button>
                </div>
                <p className="fs-3">商品類別</p>
                <ul className="list-group">
                    <li className="list-group-item d-flex">
                        <input className="form-check-input me-1" type="checkbox" value="" id="firstCheckbox" />
                        <label className="form-check-label" for="firstCheckbox">First checkbox</label>
                        <button type="button" className="ms-auto btn btn-primary btn-sm">編輯</button>
                        <button type="button" className="ms-2 btn btn-secondary btn-sm">刪除</button>
                    </li>
                    <li className="list-group-item d-flex">
                        <input className="form-check-input me-1" type="checkbox" value="" id="secondCheckbox" />
                        <label className="form-check-label" for="secondCheckbox">Second checkbox</label>
                        <button type="button" className="ms-auto btn btn-primary btn-sm">編輯</button>
                        <button type="button" className="ms-2 btn btn-secondary btn-sm">刪除</button>
                    </li>
                    <li className="list-group-item d-flex">
                        <input className="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox" />
                        <label className="form-check-label" for="thirdCheckbox">Third checkbox</label>
                        <button type="button" className="ms-auto btn btn-primary btn-sm">編輯</button>
                        <button type="button" className="ms-2 btn btn-secondary btn-sm">刪除</button>
                    </li>
                    <li className="list-group-item d-flex">
                        <input className="form-check-input me-1" type="checkbox" value="" id="firstCheckbox" />
                        <label className="form-check-label" for="firstCheckbox">First checkbox</label>
                        <button type="button" className="ms-auto btn btn-primary btn-sm">編輯</button>
                        <button type="button" className="ms-2 btn btn-secondary btn-sm">刪除</button>
                    </li>
                    <li className="list-group-item d-flex">
                        <input className="form-check-input me-1" type="checkbox" value="" id="firstCheckbox" />
                        <label className="form-check-label" for="firstCheckbox">First checkbox</label>
                        <button type="button" className="ms-auto btn btn-primary btn-sm">編輯</button>
                        <button type="button" className="ms-2 btn btn-secondary btn-sm">刪除</button>
                    </li>
                    <li className="list-group-item d-flex">
                        <input className="form-check-input me-1" type="checkbox" value="" id="firstCheckbox" />
                        <label className="form-check-label" for="firstCheckbox">First checkbox</label>
                        <button type="button" className="ms-auto btn btn-primary btn-sm">編輯</button>
                        <button type="button" className="ms-2 btn btn-secondary btn-sm">刪除</button>
                    </li>
                    <li className="list-group-item d-flex">
                        <input className="form-check-input me-1" type="checkbox" value="" id="firstCheckbox" />
                        <label className="form-check-label" for="firstCheckbox">First checkbox</label>
                        <button type="button" className="ms-auto btn btn-primary btn-sm">編輯</button>
                        <button type="button" className="ms-2 btn btn-secondary btn-sm">刪除</button>
                    </li>
                    <li className="list-group-item d-flex">
                        <input className="form-check-input me-1" type="checkbox" value="" id="firstCheckbox" />
                        <label className="form-check-label" for="firstCheckbox">First checkbox</label>
                        <button type="button" className="ms-auto btn btn-primary btn-sm">編輯</button>
                        <button type="button" className="ms-2 btn btn-secondary btn-sm">刪除</button>
                    </li>
                    <li className="list-group-item d-flex">
                        <input className="form-check-input me-1" type="checkbox" value="" id="firstCheckbox" />
                        <label className="form-check-label" for="firstCheckbox">First checkbox</label>
                        <button type="button" className="ms-auto btn btn-primary btn-sm">編輯</button>
                        <button type="button" className="ms-2 btn btn-secondary btn-sm">刪除</button>
                    </li>
                    <li className="list-group-item d-flex">
                        <input className="form-check-input me-1" type="checkbox" value="" id="firstCheckbox" />
                        <label className="form-check-label" for="firstCheckbox">First checkbox</label>
                        <button type="button" className="ms-auto btn btn-primary btn-sm">編輯</button>
                        <button type="button" className="ms-2 btn btn-secondary btn-sm">刪除</button>
                    </li>
                </ul>
            </div>
            <Pagination></Pagination>
        </div>
    )
}

export default Category;