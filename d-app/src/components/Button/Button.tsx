import React from "react";
import { HashLoader } from "react-spinners";

export interface IButtonProps {
    title: string
    onPress: () => void
    isLoading?: boolean
    disabled?: boolean
    additionalButtonStyle?: string //classname referenced in scss file
    additionalButtonTitleStyle?: string //classname referenced in scss file
}

const Button: React.FC<IButtonProps> = (props: IButtonProps) => {

    const onPressHandler = () => {
        if(!props.isLoading && !props.disabled) {
            props.onPress()
        }
    }
    return (
        <div
            className={`button button-hover-click-effect ${props.additionalButtonStyle ?? ""}`}
            onClick={onPressHandler}
        >
            <div
                className="button-loader"
                style={{
                    display: !!props.isLoading ? "block" : "none"
                }}
            >
                <HashLoader color="#395241" size={17} />
            </div>
            <text
                className={`button-title bold-font h4 ${props.additionalButtonTitleStyle ?? ""}`}
                style={{
                    visibility: !!props.isLoading ? "hidden" : "visible"
                }}
            >
                {props.title}
            </text>
        </div>
    );
}

export default Button;