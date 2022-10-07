import React from "react";
import Input from "../../../../../components/Input/Input";
import DonationAmount from "./DonationAmounts";

interface IComponentProps {
    heading: string
    subHeading?: string
    inputFieldType: "INPUT_FIELD" | "DONATION_AMOUNT"
    placeHolder?: string
    value: any
    updateValue: (newValue: any) => void
}

const FormField: React.FC<IComponentProps> = (props: IComponentProps) => {
    return (
        <div className="ff-outer-container">
            <text className="ff-heading bold-font h4">{props.heading}</text>
            {
                !!props.subHeading &&
                <text className="ff-sub-heading h6">{props.subHeading}</text>
            }
            {
                props.inputFieldType === "INPUT_FIELD" &&
                <Input
                    value={props.value}
                    placeholder={props.placeHolder ?? "Type here..."}
                    onInputUpdate={props.updateValue}
                    additionalStyletyle="ff-input"
                />
            }
            {
                props.inputFieldType === "DONATION_AMOUNT" &&
                <DonationAmount updateValue={props.updateValue} />
            }
        </div>
    );
}

export default FormField;

