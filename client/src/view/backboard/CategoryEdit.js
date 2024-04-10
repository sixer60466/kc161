import { useParams } from "react-router-dom"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CategoryEdit() {
    const { id } = useParams();
    const [imageUrl, setImageUrl] = useState() //顯示圖片網址
    const [image, setImage] = useState() //上傳表單
    const [formData, setFormData] = useState({
        name: '',
    })

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:8000/category/${id}`)
                .then((res) => {
                    const { name, image } = res.data
                    setFormData((preFormData) => ({
                        ...preFormData,
                        name,
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


    const handleChange = (e) => {
        setFormData((preValue) => {
            return {
                ...preValue,
                name: e.target.value
            }
        })
    }

    // 設定圖片前台預覽，以及圖片上傳
    const handleImageInput = (e) => {
        const image = e.target.files[0]
        setImage(image)
        if (image) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setImageUrl(reader.result)
            }
            reader.readAsDataURL(image)
        }
    }

    const handlePostSubmit = (e) => {
        e.preventDefault();
        const data = new FormData()
        Object.keys(formData).forEach((key) => {
            data.append(key, formData[key])
        })
        data.append('image', image)
        axios.post('http://localhost:8000/category/create', data)
            .then((res) => {
                window.history.back();
            })
            .catch((err) => {
                console.error(err)
            })
    }



    const handlePutSubmit = (e) => {
        e.preventDefault();
        const data = new FormData()
        Object.keys(formData).forEach((key) => {
            data.append(key, formData[key])
        })
        data.append('image', image)
        axios.put(`http://localhost:8000/category/${id}`, data)
            .then((res) => {
                window.history.back();
            })
            .catch((err) => {
                console.error(err);
            })
    }

    return (
        <div className="d-flex flex-column p-3 bg-body-tertiary" style={{ width: "80%", position: "absolute", right: "0px", top: "0px", bottom: "0px" }}>
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                <svg className="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap" /></svg>
                <span className="fs-4">{id ? '編輯' : '新增'}商品分類</span>
            </a>
            <hr />
            <div style={{ width: "70%", marginLeft: "10%" }}>
                <div className="mb-3">
                    <form onSubmit={id ? handlePutSubmit : handlePostSubmit}>
                        <label htmlFor="name" className="form-label">商品分類名稱：</label>
                        <input className="form-control" type="text" id="name" placeholder="交趾陶、水晶..." value={formData.name} onChange={handleChange} required />
                        <label htmlFor="image" className="form-label mt-3">上傳圖片：</label>
                        {imageUrl && <img className='mt-3' src={imageUrl} style={{ maxWidth: '20%' }} alt="分類圖"></img>}
                        <input onChange={handleImageInput} className="form-control mt-3" type="file" id="image" required={!imageUrl}></input>
                        <div className="d-flex mt-3">
                            <button type="submit" className="ms-auto btn btn-primary btn-sm">確認</button>
                            <button type="button" onClick={() => { window.history.back(); }} className="ms-2 btn btn-secondary btn-sm">取消</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}
export default CategoryEdit