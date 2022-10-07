import React, { useState, useEffect } from "react";
import AmountTile from "./AmountTile";
import Input from "../../../../../components/Input/Input";
import { USD_TO_ADA, FEES_PERCENTATGE_SAMPLE_DATA } from "../../../utils";

interface IComponentProps {
    updateValue: (newValue: string) => void
}

const DonationAmount: React.FC<IComponentProps> = (props: IComponentProps) => {
    const [donationAmountType, setdonationAmountType] = useState<undefined | string>();
    const [donationAmount, setDonationAmount] = useState<string>("")

    /**
     * when no donation type is selected or when the user chooses the custom option:
     *      set the donation amount to zero.
     * when any other option is selected:
     *      set the donation amount to the number after the "_" character.
     */
    useEffect(() => {
        if (donationAmountType === undefined || donationAmountType === "CUSTOM") {
            setDonationAmount("");
        }
        else {
            setDonationAmount(donationAmountType.split("_")[1]);
        }
    }, [donationAmountType])

    useEffect(() =>{
        props.updateValue(donationAmount);
    }, [donationAmount])

    /**
     * 
     * @param chosenAmountType 
     * Method to choose from various donation amount options.
     * If user presses an already selected option, the option will get unselected.
     */
    const onChooseAmmountType = (chosenAmountType: string) => {
        if (donationAmountType === chosenAmountType) {
            setdonationAmountType(undefined);
        }
        else {
            setdonationAmountType(chosenAmountType)
        }
    }
    return (
        <div className="da-outer-container">
            <div className="da-available-amounts-container">
                <AmountTile
                    value="$100"
                    isChosen={donationAmountType === "FIXED_100"}
                    onPress={() => onChooseAmmountType("FIXED_100")}
                />
                <AmountTile
                    value="$500"
                    isChosen={donationAmountType === "FIXED_500"}
                    onPress={() => onChooseAmmountType("FIXED_500")}
                />
                <AmountTile
                    value="$1000"
                    isChosen={donationAmountType === "FIXED_1000"}
                    onPress={() => onChooseAmmountType("FIXED_1000")}
                />
                <AmountTile
                    value="CUSTOM"
                    isChosen={donationAmountType === "CUSTOM"}
                    onPress={() => onChooseAmmountType("CUSTOM")}
                />
            </div>
            {
                donationAmountType === "CUSTOM" &&
                <Input
                    value={donationAmount}
                    placeholder="Donation Amount"
                    onInputUpdate={setDonationAmount}
                    additionalStyletyle="ff-input"
                />
            }
            <div className="da-conversions-fees">
                <text className="da-conversions-fees-heading bold-font">Conversion to ADA</text>
                <text className="da-conversions-fees-value">{`: ${(parseFloat(donationAmount || "0") * USD_TO_ADA).toFixed(2)} ADA`}</text>
            </div>
            <div className="da-conversions-fees">
                <text className="da-conversions-fees-heading bold-font">Total Fees</text>
                <text className="da-conversions-fees-value">{`: $ ${(parseFloat(donationAmount || "0") * FEES_PERCENTATGE_SAMPLE_DATA).toFixed(2)}`}</text>
            </div>
        </div>
    );
}

export default DonationAmount;