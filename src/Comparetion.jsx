import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

export default function Comparetion() {

    const [first, setFirst] = useState(0)
    const [sec, setSec] = useState(0)
    const [res, setRes] = useState("")
    const [diff, setDiff] = useState("")
    const [show, setShow] = useState(false)

    const setVal1 = (e) => {
        setFirst(e.target.value)
    }

    const setVal2 = (e) => {
        setSec(e.target.value)
    }

    const calculate = () => {
        const diff = sec - first
        const result = (100 * diff) / first
        setDiff(diff)
        setRes("% " + result)
        setShow(true)
    }

    return (
        <div>
            <div className='d-flex my-3'>
                <label>İlk veri</label>
                <input className='input ' onChange={e => setVal1(e)} style={{ marginLeft: "60px" }} />
            </div>
            <div className='d-flex'>
                <label>İkinci veri</label>
                <input className='input ' onChange={e => setVal2(e)} />
            </div>
            <Button onClick={calculate} className='my-4 btn-sm'><span className='mx-2'>Hesapla</span></Button>
            {show && <div>
                <p className='my-2 mx-2'>Artıs oranı {res.substring(0, 9)}</p>
                <p className='my-2 mx-2'>Puan farkı {diff}</p>
            </div>}
        </div>
    )
}
