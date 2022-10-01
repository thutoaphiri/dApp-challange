import React from "react";

interface IComponentProps {
    render: "LOGO_ONLY" | "LOGO_AND_NAME"
    canNavToHome: boolean
}

const Logo: React.FC<IComponentProps> = (props: IComponentProps) => {
    return (
        <div className="logo-outer-container">
            <img
                className="logo-image"
                alt="DirectEd Logo"
                src={require("../../assets/images/directed_logo.png")}
            />
            {
                props.render === "LOGO_AND_NAME" &&
                <div className="logo-name-container">
                    <text className="logo-name-text h5 bold-font">DirectEd</text>
                    <text className="logo-name-text p regular-font">Realising Potential</text>
                </div>
            }
        </div>
    );
}

export default Logo;