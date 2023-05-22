import React from 'react'

export default function Select({ name, onChange, children, valueTrue }) {
    return (
        <div className='input'>
            <select name={name} onChange={onChange} >
                <option value="0">Escolha uma categoria</option>
                {children}
            </select>
            {valueTrue && <span className='error'>Selecione uma categoria</span>}
        </div>
    )
}
