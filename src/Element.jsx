import React from 'react'
import { Button } from 'react-bootstrap'

export default function Element(props) {
    return (
        <div>
            <form onSubmit={props.add} className='d-flex ms-2' >
                <label className='my-auto'>--{">"}</label>
                <input className='input my-auto' style={{ marginLeft: "20px" }} placeholder='val' />
                <input className='my-auto' style={{ marginLeft: "8px", width: "100px", height: "30px" }} placeholder='name' />
                <Button className='btn-sm ms-4 my-4' type='submit' style={{ borderRadius: "50%", fontSize: "0.8rem" }}><span className='mx-2'>✓</span></Button>
            </form>

        </div>
    )
}
