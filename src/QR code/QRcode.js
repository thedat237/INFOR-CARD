import React, { useEffect, useState } from 'react'
import  QRCode  from 'qrcode';

export default function QRcode() {
    const [src, setSrc] = useState("")
    const [inputQR, setInputQR] = useState("")
    const [arrQR, setArrQR] = useState(() => {
        const jsonQRParse = JSON.parse(localStorage.getItem("QR"))

        return jsonQRParse || []
    })

    useEffect(() => {
        const jsonQRChange = JSON.stringify(arrQR)
        localStorage.setItem("QR", jsonQRChange)
    }, [arrQR])

    const handleChangeInput = (e) => {
        setInputQR(e.target.value)
    }

    const onClickCreateQRCode = () => {
        // QRCode.toDataURL(inputQR)
        // .then((data) => {
        //     setSrc(data)
        // })
        setArrQR((prev) => {
            const newArrQR = [...prev, inputQR]

            return newArrQR
        })
    }

    return (
        <div>
            <div>
                <input type="text" onChange={handleChangeInput}/>
                <button onClick={() => onClickCreateQRCode()}>Create QR Code</button>
                {/* {inputQR} */}
            </div>
            <div>
                {arrQR !== null ? 
                    arrQR.map((qr) =>{
                        return (
                            <div>{qr}</div>
                        )
                })
                :
                "No QR"
                }
            </div>
        </div>
    )
}
