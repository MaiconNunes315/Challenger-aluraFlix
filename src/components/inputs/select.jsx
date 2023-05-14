import React from 'react'

export default function Select({ name, required, onChange, children }) {
    return (
        <div className='input'>
            <select name={name} placeholder='Selecione a categoria' required={required} onChange={onChange}>
                <option>Escolha uma categoria</option>
                {children}
            </select>
        </div>
    )
}
