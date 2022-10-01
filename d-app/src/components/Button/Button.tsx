import React from "react";

interface IComponentProps {
    title: string
    onPress: () => void
    additionalButtonStyle?: string //classname referenced in scss file
    additionalButtonTitleStyle?: string //classname referenced in scss file
}

const Button: React.FC<IComponentProps> = (props: IComponentProps) => {
    return (
        <div
            className={`button ${props.additionalButtonStyle ?? ""}`}
            onClick={props.onPress}
        >
            <text
                className={`button-title bold-font h4 ${props.additionalButtonTitleStyle ?? ""}`}
            >
                {props.title}
            </text>
        </div>
    );
}

export default Button;