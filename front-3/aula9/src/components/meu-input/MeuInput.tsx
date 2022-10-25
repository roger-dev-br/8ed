import { ChangeEventHandler, FocusEventHandler } from "react";

interface MeuInputProps {
    onChange: ChangeEventHandler<HTMLInputElement>,
    onFocus?: FocusEventHandler<HTMLInputElement>,
}

const MeuInput: React.FC<MeuInputProps> = ({ onChange, onFocus }) => {
    return (
        <>
            <input id="teste"
                onChange={onChange}
                onBlur={onFocus}
            />
        </>
    )
}

export default MeuInput;