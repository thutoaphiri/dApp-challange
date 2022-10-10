import React, {useState, useCallback} from "react";
import FormField from "./components/FormField";
import Button from "../../../../components/Button/Button";
import { DonationNftMap_SAMPLE_DATA } from "../../utils";

const DonationForm: React.FC = () => {
    const [donationAmount, setdonationAmount] = useState<number>(0.0);
    const [emailAddress, setEmailAddress] = useState<string>("");
    const [viewNft, setViewNft] = useState<boolean>(false);

    const getNft = useCallback (
        (): string => {
            if (donationAmount < 500) {
                return DonationNftMap_SAMPLE_DATA[100];
            }
            else if (donationAmount < 1000) {
                return DonationNftMap_SAMPLE_DATA[500];
            }
            else if (donationAmount < 1500) {
                return DonationNftMap_SAMPLE_DATA[1000];
            }
            else {
                return DonationNftMap_SAMPLE_DATA[1500];
            }
        },
        [donationAmount],
    );


    const onDonateHandler = () => {
        //make donation logic.

    }

    return (
        <div className="df-outer-container">
            <div className="df-form-container">
                <FormField
                    heading="Donation Amount"
                    subHeading="Selected an amount from one of the preset amounts or enter your own donation amount using the CUSTOM option"
                    inputFieldType="DONATION_AMOUNT"
                    value={donationAmount}
                    updateValue={setdonationAmount}
                />
                <FormField
                    heading="Email Address"
                    subHeading="Enter your email address for tax benefits and order confirmation"
                    inputFieldType="INPUT_FIELD"
                    placeHolder="Email"
                    value={emailAddress}
                    updateValue={setEmailAddress}
                />
                {
                    donationAmount > 0 &&
                    <div className="df-nft">
                        <text className="df-nft-text bold-font h4">Exlusive NFT</text>
                        <text className="df-nft-text h6">Click the picture below to see the exclusive NFT you will receive with your donation</text>
                        <img
                            className="df-nft-image"
                            onClick={() => setViewNft(!viewNft)}
                            src={getNft()}
                            alt="Awarded NFT"
                        />
                    </div>
                }
                <Button
                    title="Donate"
                    onPress={onDonateHandler}
                />
            </div>

            <div
                className="df-nft-full-screen"
                style={{
                    height: viewNft ? "100%" : "0%"
                }}
                onClick={() => setViewNft(!viewNft)}
            >
                <img
                    className="df-nft-image-fs"
                    src={getNft()}
                    alt="Awarded NFT"
                />
            </div>
        </div>
    );
}

export default DonationForm;