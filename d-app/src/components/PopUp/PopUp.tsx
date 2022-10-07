import React from "react";
import Alert from "./components/Alert";

interface IComponentProps {}

const PopUp: React.FC<IComponentProps> = (props: IComponentProps) => {
    return (
        <div className="pu-outer-container">
            <Alert
                alertHeading="Wallert Not Connected"
                alertBody="Before you can donate to your chosen schoo, start by connecting your wallet."
                buttonsProps={[
                    {
                        title: "Okay",
                        onPress: () => {}
                    }
                ]}
            />
        </div>
    );
}

export default PopUp;