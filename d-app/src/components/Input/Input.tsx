import React, { ChangeEvent } from "react";

interface IComponentProps {
    placeholder: string
    value: string
    onInputUpdate: (newValue: any) => void
    additionalStyletyle?: string
}

const Input: React.FC<IComponentProps> = (props: IComponentProps) => {

    const onInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.onInputUpdate(event.target.value);
    }
    return (
        <input
            className={`input h5 ${props.additionalStyletyle ?? ""}`}
            placeholder= {props.placeholder}
            value={props.value}
            onChange={onInputChangeHandler}
        />
    );
}

export default Input;