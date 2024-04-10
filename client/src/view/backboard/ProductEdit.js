import { useParams } from "react-router-dom"
import axios from 'axios';
import { useState, useEffect } from 'react';

function ProductEdit() {
    const { id } = useParams()
    const [categories, setCategories] = useState([])
    const [imageUrl, setImageUrl] = useState(); //顯示圖片網址
    const [image, setImage] = useState(); //上傳表單
    const [formData, setFormData] = useState({
        category: '',
        name: '',
        productId: '',
        size: '',
        price: '',
    })

    useEffect(() => {
        axios.get('http://localhost:8000/category')
            .then((res) => {
                setCategories(res.data)
            })
            .catch((err) => {
                console.error(err)
            })
        if (id) {
            axios.get(`http://localhost:8000/product/${id}`)
                .then((res) => {
                    const { category, name, image, productId, size, price } = res.data
                    setFormData((prevFormData) => ({
                        ...prevFormData,
                        category,
                        name,
                        productId,
                        size,
                        price
                    }))
                    const baseUrl = 'http://localhost:8000/'
                    const imagePath = image.replace(/\\/g, '/');
                    const fullPath = baseUrl + imagePath.split('/').slice(1).join('/');
                    setImageUrl(fullPath || '')
                })
                .catch((err) => {
                    console.error(err)
                })
        }
    }, [id])

    // 設定圖片前台預覽，以及圖片上傳
    const handleImageInput = (e) => {
        const image = e.target.files[0]
        setImage(image)
        if (image) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageUrl(reader.result)
            }
            reader.readAsDataURL(image)
        }
    }

    const handleFormChange = (e) => {
        const { id, value } = e.target
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [id]: value,
            }
        })
    }


    const handlePostSubmit = (e) => {
        e.preventDefault()
        const data = new FormData()
        Object.keys(formData).forEach((key) => {
            data.append(key, formData[key])
        })
        data.append('image', image)
        axios.post('http://localhost:8000/product/create', data)
            .then((res) => {
                window.history.back();
            })
            .catch((err) => {
                console.error(err)
            })
    }

    const handelePutSubmit = (e) => {
        e.preventDefault()
        const data = new FormData()
        Object.keys(formData).forEach((key) => {
            data.append(key, formData[key])
        })
        data.append('image', image)
        axios.put(`http://localhost:8000/product/${id}`, data)
            .then((res) => {
                window.history.back();
            })
            .catch((err) => {
                console.error(err)
            })
    }

    return (
        <div>
            <div className="d-flex flex-column p-3 bg-body-tertiary" style={{ width: "80%", position: "absolute", right: "0px", top: "0px", bottom: "0px" }}>
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    <svg className="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap" /></svg>
                    <span className="fs-4">{id ? '編輯' : '新增'}商品內容</span>
                </a>
                <hr />
                <div style={{ width: "70%", marginLeft: "10%" }}>
                    <div className="mb-3">
                        <form onSubmit={id ? handelePutSubmit : handlePostSubmit}>
                            <label htmlFor="category" className="form-label">選擇該產品分類：</label>
                            <select onChange={handleFormChange} className="form-select" value={formData.category || ''} id='category' required>
                                <option value='' disabled>請選擇分類</option>
                                {categories.map(category =>
                                    <option value={category._id} key={category._id}>{category.name}</option>
                                )}
                            </select>
                            <label htmlFor="name" className="form-label mt-3">產品名稱：</label>
                            <input onChange={handleFormChange} className="form-control" type="text" id="name" value={formData.name} required />
                            <label htmlFor="image" className="form-label mt-3">上傳圖片：</label>
                            {imageUrl && <img className='mt-3' src={imageUrl} style={{ maxWidth: '20%' }} alt="產品圖"></img>}
                            <input onChange={handleImageInput} className="form-control mt-3" type="file" id="image" required={!imageUrl}></input>
                            <label htmlFor="productId" className="form-label mt-3">產品編號：</label>
                            <input onChange={handleFormChange} className="form-control" type="text" id="productId" value={formData.productId} required />
                            <label htmlFor="size" className="form-label mt-3">產品尺寸：</label>
                            <input onChange={handleFormChange} className="form-control" type="text" id="size" value={formData.size} required />
                            <label htmlFor="price" className="form-label mt-3">產品價格：</label>
                            <input onChange={handleFormChange} className="form-control" type="number" id="price" value={formData.price} required />
                            <div className="d-flex mt-3">
                                <button type="submit" className="ms-auto btn btn-primary btn-sm">確認</button>
                                <button type="button" onClick={() => { window.history.back(); }} className="ms-2 btn btn-secondary btn-sm">取消</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default ProductEdit