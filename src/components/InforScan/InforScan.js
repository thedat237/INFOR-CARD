import React from 'react'
import "./InforScan.css"
import BannerInfoScan1 from "../../assets/banner_info_scan1.png"

export default function InforScan(props) {
    const {name, date, avatar} = props
    return (
        <div className='d-flex justify-content-center align-items-center'>
            <div className='position-relative'>
                <img src={BannerInfoScan1} className="img-info-scan" alt='banner_scan'/>
                <img src={avatar} className='scanned-avatar' alt='avatar'/>
                <h4 className='scanned-name text-white'>{name}</h4>
                <p className='scanned-date'>{date}</p>
            </div>
            
        </div>
    )
}
