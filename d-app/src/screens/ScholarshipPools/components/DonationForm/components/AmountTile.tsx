import React from "react";

interface IComponentProps {
    value: string
    onPress: () => void
    isChosen: boolean
}

const AmountTile: React.FC<IComponentProps> = (props: IComponentProps) => {
    return (
        <div
            className={`at-outer-container ${props.isChosen ? "at-outer-container-selected" : ""}`}
            onClick={props.onPress}
        >
            <text className={`at-text bold-font h4 ${props.isChosen ? "at-text-selected" : ""}`}>{props.value}</text>
        </div>
    );
}

export default AmountTile;