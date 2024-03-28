
function CategoryEdit() {
    return (
        <div className="d-flex flex-column p-3 bg-body-tertiary" style={{ width: "80%", position: "absolute", right: "0px", top: "0px", bottom: "0px" }}>
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                <svg className="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap" /></svg>
                <span className="fs-4">商品分類 新增/編輯</span>
            </a>
            <hr />
            <div style={{ width: "70%", marginLeft: "10%" }}>
                <div class="mb-3">
                    <form>
                        <label for="formFile" class="form-label">商品分類名稱：</label>
                        <input class="form-control" type="text" id="formFile" placeholder="交趾陶、水晶..." />
                        <div className="d-flex mt-3">
                            <button type="button" className="ms-auto btn btn-primary btn-sm">確認</button>
                            <button type="button" className="ms-2 btn btn-secondary btn-sm">取消</button>
                        </div>
                    </form>
                </div>

            </div>

        </div>
    )
}
export default CategoryEdit