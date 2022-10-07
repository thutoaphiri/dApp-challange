import React from "react";
import { Icon } from "@iconify/react";
import Button, { IButtonProps } from "../../Button/Button";

interface IComponentProps {
    alertHeading: string
    alertBody: string
    buttonsProps?: Array<IButtonProps>
}

const Alert: React.FC<IComponentProps> = (props: IComponentProps) => {
    return (
        <div className="alert-outer-container">
            <div className="exit-container">
                <Icon
                    className="button-hover-click-effect  h3 bold-font" 
                    icon="codicon:chrome-close"
                    onClick={() => {}}
                />
            </div>
            <text className="alert-heading bold-font h4">{props.alertHeading}</text>
            <text className="alert-body h5">{props.alertBody}</text>
            {
                !!props.buttonsProps &&
                <div className="alert-buttons">
                    {
                        props.buttonsProps.map((
                            button: IButtonProps, index: number
                        ) => {
                            return (
                                <Button
                                    key={`ALERT-BUTTON-${index}`}
                                    {...button}
                                />
                            )
                        })
                    }
                </div>
            }
        </div>
    );
}

export default Alert;