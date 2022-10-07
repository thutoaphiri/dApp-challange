import React, {useState} from "react";
import FormField from "./components/FormField";
import { Icon } from "@iconify/react";
import Button from "../../../../components/Button/Button";

const DonationForm: React.FC = () => {
    const [donationAmount, setdonationAmount] = useState<number>(0.0);
    const [emailAddress, setEmailAddress] = useState<string>("");
    const [viewNft, setViewNft] = useState<boolean>(false);
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
                <div className="df-nft">
                    <text className="df-nft-text bold-font h4">Exlusive NFT</text>
                    <text className="df-nft-text h6">Click the picture below to see the exclusive NFT you will receive with your donation</text>
                    <img
                        className="df-nft-image"
                        onClick={() => setViewNft(!viewNft)}
                        src="https://www.actu-juridique.fr/app/uploads/2022/05/AdobeStock_481992223-1024x683.jpeg"
                    />
                </div>
                <Button
                    title="Donate"
                    onPress={() => {}}
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
                    src="https://www.actu-juridique.fr/app/uploads/2022/05/AdobeStock_481992223-1024x683.jpeg"
                />
            </div>
        </div>
    );
}

export default DonationForm;