import React from 'react'
import "./input.css"


export default function Input({ title, type, required, value, onChange }) {
    return (
        <div className="input">
            <label>{title}</label>
            <input type={type} required={required} value={value} onChange={onChange} />
        </div>
    )
}
