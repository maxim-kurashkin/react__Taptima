import React from 'react';
import './app-form-input.css';

const AppFormInput = ({id, name, type, placeholder,label, dhavelabel}) => {

    let classNames = "form__input__label";
    if(dhavelabel) {
        classNames +=' form__dont__label'
    }
    
    return(
        <div className="form__input">
            <input className="form__input__item" id={id} name={name} type={type} placeholder={placeholder}/>
            <label className="input__item__label" htmlFor={id}>{placeholder}</label>
            <label className={classNames}>{label}</label>
        </div>
    )
}



export default AppFormInput;