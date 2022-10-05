import React from "react";

interface IComponentProps {
    value: number
    heading: string
    icon?: string
}

const StatsTile: React.FC<IComponentProps> = (props: IComponentProps) => {
    return (
        <div className="st-outer-container">
            <text className="st-text h4 bold-font">{props.value}</text>
            <text className="st-text h6 regular-font">{props.heading}</text>
        </div>
    );
}

export default StatsTile;