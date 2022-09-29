import React from 'react';
import './GrowdevInput.css'

type buttonType = "submit" | "button" | "reset";

interface InputProps {
    texto: string;
    placeholder: string;
    type: string;
    tipoBotao: buttonType;
    cor: string;
}

const GrowdevInput: React.FC<InputProps> = ({
    texto, placeholder, type, tipoBotao, cor
}) => {
    return (
        <>
            <div>
                <label>{ texto }</label>
            </div>
            <div>
                <button type={tipoBotao} className={cor}>OK</button>
                <input type={type} placeholder={placeholder} ></input>
            </div>
        </>
    )
}

export default GrowdevInput;