function ProductEdit() {
    return (
        <div className="d-flex flex-column p-3 bg-body-tertiary" style={{ width: "80%", position: "absolute", right: "0px", top: "0px", bottom: "0px" }}>
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                <svg className="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap" /></svg>
                <span className="fs-4">商品列表 新增/編輯</span>
            </a>
            <hr />
            <div style={{ width: "70%", marginLeft: "10%" }}>
                <div className="mb-3">
                    <form>
                        <label for="productName" className="form-label">產品名稱：</label>
                        <input className="form-control" type="text" id="productName" />
                        <label for="formFile" className="form-label mt-3">上傳圖片：</label>
                        <input className="form-control" type="file" id="formFile"></input>
                        <label for="productId" className="form-label mt-3">產品編號：</label>
                        <input className="form-control" type="text" id="productId" />
                        <label for="productSize" className="form-label mt-3">產品尺寸：</label>
                        <input className="form-control" type="text" id="productSize" />
                        <label for="productPrice" className="form-label mt-3">產品價格：</label>
                        <input className="form-control" type="text" id="productPrice" />
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
export default ProductEdit