import style from './CustomInput.module.css'

const CustomInput = ({type, placeholder, value, onChange}: any) => {

    function handleChange(e:any){
        onChange(e.target.value)
    };

    return (
        <input
            className={style.input}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            />
    )
}

export default CustomInput