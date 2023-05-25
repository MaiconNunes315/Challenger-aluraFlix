import React from 'react'
import "./input.css"




export default function Input({ onblur, title, type, value, onChange, name, errors, register }) {

    return (
        <div className="input">
            <label>{title}</label>
            <input type={type} name={name} value={value} onChange={onChange} {...register(name)} />
            <span className='error'>{errors}</span>
        </div>
    )
}
