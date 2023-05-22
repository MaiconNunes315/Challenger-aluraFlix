import React, { useState } from 'react'
import "./input.css"
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";



export default function Input({ title, type, value, onChange, name, errors, register }) {

    return (
        <div className="input">
            <label>{title}</label>
            <input type={type} name={name} value={value} onChange={onChange} {...register(name)} />
            <span className='error'>{errors}</span>
        </div>
    )
}
