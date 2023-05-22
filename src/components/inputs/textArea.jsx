import React from 'react'

export default function TextArea({ placeholder, onChange, register, name, errors }) {
    return (
        <div className='input'>
            <label>{placeholder}</label>
            <textarea onChange={onChange} name={name} {...register(name)} ></textarea>
            <span className='error'>{errors}</span>
        </div>
    )
}
