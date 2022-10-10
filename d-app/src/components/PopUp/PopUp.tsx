import React from "react";
import Alert from "./components/Alert";
import { useSelector } from "react-redux";
import { IPopUp } from "../../redux-store/reducers/popups";
import { RootState } from "../../redux-store/reducers";

interface IComponentProps {}

const PopUp: React.FC<IComponentProps> = (props: IComponentProps) => {
    const reduxPopUpProps = useSelector<RootState, IPopUp>(state => state.popUp);

    return (
        <div
            className="pu-outer-container"
            style={{
                display: reduxPopUpProps.popUpVisible ? "flex" : "none"
            }}
        >
            {
                !!reduxPopUpProps.alertProps &&
                <Alert
                    {...reduxPopUpProps.alertProps}
                />
            }
        </div>
    );
}

export default PopUp;