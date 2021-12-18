import React from 'react'
import "./Banner04.css"
import bannerCard5 from "../../../assets/banner_card5.png"
import bannerCardNoName from "../../../assets/banner_card_noname.png"
import bannerQRCode from "../../../assets/banner_qrcode.png"
import { Button } from 'react-bootstrap'

export default function Banner04() {
    return (
        <div className='container m-5'>
            <div className='d-flex flex-column align-items-center'>
                <h2 className='banner__heading text-dark fw-bold'>
                    Infor card
                </h2>
                <h2 className='banner__heading text-dark fw-bold'>
                    Thẻ cá nhân thông minh
                </h2>
            </div>
            <div className='d-flex'>
                <div className='demo-card'>
                    <img src={bannerCardNoName} className='demo-card-img'/>
                    <img src={bannerQRCode} className="demo-card-qr"/>
                    <h6 className='demo-card-name'>Do The Dat</h6>
                </div>
                <div className='d-flex flex-column align-items-start form-demo-card'>
                    <div className='d-flex fw-bold fs-5 mb-3'>
                        <span>Loại thẻ:</span>
                        <span className='ms-3'>Thẻ cơ bản</span>
                    </div>
                    <div className='d-flex fw-bold fs-5 mb-3'>
                        <span>Màu sắc:</span>
                        <img src={bannerCardNoName} className='card-demo-luxury ms-3'/>
                        <img src={bannerCard5} className='card-demo-luxury ms-3'/>
                    </div>
                    <div className='d-inline-block mb-3 w-100'>
                        <label className='form-label fw-bold fs-5'>Tên của bạn</label>
                        <input className='form-control' placeholder='Nhập tên của bạn'/>
                    </div>
                    <div className='d-flex justify-content-between align-items-center w-100'>
                        <div className='d-flex'>
                            <p className='fw-bold fs-3 '>159,000đ</p>
                            <p className='ms-3 fw-bold fst-italic fs-3 text-secondary text-decoration-line-through'>259,000đ</p>
                        </div>
                        <h6 className='fw-bold'>Freeship toàn quốc</h6>
                    </div>
                    <Button variant="primary">Đặt mua</Button>
                </div>
            </div>
        </div>
    )
}
