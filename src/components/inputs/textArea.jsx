import React from 'react'

export default function TextArea({ placeholder, onChange }) {
    return (
        <div className='input'>
            <label>{placeholder}</label>
            <textarea onChange={onChange}></textarea>
        </div>
    )
}
