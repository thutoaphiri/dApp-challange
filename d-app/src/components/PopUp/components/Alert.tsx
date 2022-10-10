import React from "react";
import { Icon } from "@iconify/react";
import Button, { IButtonProps } from "../../Button/Button";
import { useDispatch } from "react-redux";
import { EPopUpsActions } from "../../../redux-store/actions/popups";

export interface IAlertProps {
    alertHeading: string
    alertBody: string
    buttonsProps?: Array<IButtonProps>
}

const Alert: React.FC<IAlertProps> = (props: IAlertProps) => {
    const dispatch = useDispatch();
    const onPopUpClose = () => {
        dispatch({type: EPopUpsActions.HIDE_POP_UP});
    }
    return (
        <div className="alert-outer-container">
            <div
                className="exit-container"
            >
                <Icon
                    className="h3 bold-font button-hover-click-effect" 
                    icon="codicon:chrome-close"
                    onClick={onPopUpClose}
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