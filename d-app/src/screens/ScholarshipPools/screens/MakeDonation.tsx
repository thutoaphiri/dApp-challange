import React from "react";
import { EScholarshipPoolsScreens } from "../utils";
import { IScholarshipPool } from "../models";
import { Icon } from '@iconify/react';
import DonationForm from "../components/DonationForm/DonationForm";

interface IComponentProps {
    currentScreen: EScholarshipPoolsScreens
    chosenDonationPool?: IScholarshipPool
    goBack: () => void
}

const MakeDonation: React.FC<IComponentProps> = ({
    currentScreen, chosenDonationPool, goBack
}: IComponentProps) => {
    return (
        <div
            className="dp-internal-screen"
            style={{
                left: currentScreen === EScholarshipPoolsScreens.MAKE_DONATION ? "0%" : "100%"
            }}
        >
            <div className="screen-heading">
                    <Icon
                        className="back-button  h3" 
                        icon="eva:arrow-ios-back-outline"
                        onClick={goBack}
                    />
                <text className="bold-font h3">{`Donate to ${chosenDonationPool?.schoolDetails?.schoolName ?? ""}`}</text>
            </div>
            <div className="screen-body md-outer-container">
                <DonationForm />
            </div>
        </div>
    );
}

export default MakeDonation;