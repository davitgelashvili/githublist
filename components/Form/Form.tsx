"use client"

import { useEffect, useState } from "react";
import CustomInput from "../UI/CustomInput/CustomInput"
import style from './Form.module.css'

const Form = ({setSearchText}:any) => {
    const [value, setValue] = useState('')

    const handleSubmit = (e:any) => {
        e.preventDefault()
        setSearchText(value)
    };
    
    useEffect(()=>{
        if(value.trim() === ''){
            setSearchText('')
        }
    },[value])
    
    return (
        <form className={style.form} onSubmit={handleSubmit}>
            <CustomInput 
                type={'text'}
                value={value}
                placeholder={'write username and press enter'}
                setSearchText={setSearchText}
                onChange={(e:any) => {
                    setValue( e );
                }}
                />
        </form>
    )
}

export default Form