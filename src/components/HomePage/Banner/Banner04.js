import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./Banner04.css"
import cardType from '../../../data/dataCard'
import InforScan from '../../InforScan/InforScan'
import QRCode from "qrcode.react"
// import logoScan from "../../../assets/logo_scan.png"

export default function Banner04() {
    const [selectedImg, setSelectedImg] = useState(cardType[0].src)
    const [selectedNameCard, setSelectedNameCard] = useState(cardType[0].name)
    const [valueInput, setValueInput] = useState({
        name: "",
        date: "",
        // imageUrl: ""
    })
    const [imageUrlAvatar, setImageUrlAvatar] = useState()
    const [imageQRcode, setImageQRcode] = useState("")
    const params = useParams()
    // console.log(params);

    const onChangeInput = (e) => {
        const newValueInput = e.target.value;
        const field = e.target.name;
        setValueInput((prev) => {
            return {
                ...prev,
                [field] : newValueInput
            }
        })
    }

    useEffect(() => {
        return () => {
            imageUrlAvatar && URL.revokeObjectURL(imageUrlAvatar.preview)
        }
    },[imageUrlAvatar])

    const onChangeAvatar = (e) => {
        const fileAvatar = e.target.files[0]

        fileAvatar.preview = URL.createObjectURL(fileAvatar)

        setImageUrlAvatar(fileAvatar) 
    }

    const onSubmitForm = (e) => {
        e.preventDefault()
        setImageQRcode(JSON.stringify(valueInput))
    }


    return (
        <>
            <div className='container m-5'>
                <div className='d-flex flex-column align-items-center'>
                    <h2 className='banner__heading text-dark fw-bold'>
                        Infor card
                    </h2>
                    <h2 className='banner__heading text-dark fw-bold'>
                        Thẻ cá nhân thông minh
                    </h2>
                </div>
                <div className='d-flex gap-5'>
                    <div className='demo-card'>
                        <img src={selectedImg} className='demo-card-img' alt='selected img'/>
                        {/* <img src={imageQRcode} className="demo-card-qr"/> */}
                        <QRCode 
                            className="demo-card-qr"  
                            size={100}
                            value={imageQRcode ? imageQRcode : "NA"}
                            bgColor={"#f7f7f7"}
                            fgColor={"#000000"}
                            level={"L"}
                            includeMargin={false}
                            renderAs={"svg"}
                            // imageSettings={{
                            //     src: logoScan,
                            //     x: null,
                            //     y: null,
                            //     height: 24,
                            //     width: 24,
                            //     excavate: true,
                            // }}
                        /> 
                        <h6 className='demo-card-name'>{valueInput.name}</h6>
                    </div>
                    <div className='d-flex flex-column align-items-start form-demo-card'>
                        <form className='w-100' onSubmit={onSubmitForm}>
                            <div className='d-flex fw-bold fs-5 mb-3'>
                                <span>Loại thẻ:</span>
                                <span className='ms-3'>{selectedNameCard}</span>
                            </div>
                            <div className='d-flex fw-bold fs-5 mb-3'>
                                <span>Màu sắc:</span>
                                <div className='d-flex'>
                                    {cardType.map((img, index) => (
                                        <div className='cursor-pointer card-type' key={index}>
                                            <img 
                                                src={img.src} 
                                                className='card-demo-luxury ms-3'
                                                onClick={() => {
                                                    setSelectedImg(img.src)
                                                    setSelectedNameCard(img.name)
                                                }}
                                                alt='img'
                                            />
                                        </div>
                                    ))}
                                    {/* <div className='cursor-pointer card-type'>
                                        <img src={bannerCard5} className='card-demo-luxury ms-3'/>
                                    </div> */}
                                </div>
                            </div>
                            <div className='d-flex w-100 gap-2 mb-3'>
                                <div className='w-100'>
                                    <label className='form-label fw-bold fs-5'>Tên của bạn</label>
                                    <input 
                                        name='name'
                                        type="text"
                                        className='form-control' placeholder='Nhập tên của bạn'
                                        value={valueInput.name}
                                        onChange={onChangeInput}
                                    />
                                </div>
                                <div className='w-100'>
                                    <label className='form-label fw-bold fs-5'>Ngày sinh</label>
                                    <input 
                                        name='date'
                                        type="date"
                                        className='form-control' placeholder='Nhập ngày sinh của bạn' 
                                        value={valueInput.date}
                                        onChange={onChangeInput}
                                    />
                                </div>
                            </div>
                            <div className='mb-3 w-100'>
                                <label className='form-label fw-bold fs-5'>Avatar</label>
                                <input 
                                    className='form-control' 
                                    placeholder='Nhập tên của bạn' 
                                    type="file"
                                    name="imageUrl"
                                    onChange={onChangeAvatar}
                                />
                            </div>
                            {/* {imageUrlAvatar && <img src={imageUrlAvatar.preview} width="20%" height="20%"/>} */}
                            <div className='d-flex justify-content-between align-items-center w-100'>
                                <div className='d-flex'>
                                    <p className='fw-bold fs-3 '>159,000đ</p>
                                    <p className='ms-3 fw-bold fst-italic fs-3 text-secondary text-decoration-line-through'>
                                        259,000đ
                                    </p>
                                </div>
                                <h6 className='fw-bold'>Freeship toàn quốc</h6>
                            </div>
                            <button className='btn btn-primary'>Đặt mua</button>
                        </form>
                        {imageUrlAvatar && <InforScan name={valueInput.name} date={valueInput.date} avatar={imageUrlAvatar.preview}/>}
                    </div>
                </div>
            </div>
        </>
    )
}
