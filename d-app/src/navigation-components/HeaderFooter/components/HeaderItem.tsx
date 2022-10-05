import React, { useState } from "react";
import { EHeaderNavigatorRoutesTitles } from "../../models";

interface IComponentProps {
    title: EHeaderNavigatorRoutesTitles
    isSelected: boolean
    onPress: (chosenRoute: EHeaderNavigatorRoutesTitles) => void
}

const HeaderItem: React.FC<IComponentProps> = (props: IComponentProps) => {

    return (
        <div
            className="hi-outer-container"
            onClick={() => props.onPress(props.title)}
        >
            <div
                className="hi-on-select-border"
                style={{
                    width: props.isSelected ? "50px" : "0px"
                }}
            />
            <text className={`hi-title h5 ${props.isSelected ? "bold-font" : "regular-font"}`}>{props.title}</text>
            <div
                className="hi-on-select-border"
                style={{
                    width: props.isSelected ? "100px" : "0px"
                }}
            />
        </div>
    );
}

export default HeaderItem;