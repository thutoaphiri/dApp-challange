import React from "react";
import { EScholarshipPoolsScreens } from "../utils";
import { IScholarshipPool } from "../models";

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
            <div className="screen-heading" onClick={goBack}>
                <text className="bold-font h3">{`Donate to ${chosenDonationPool?.schoolDetails?.schoolName ?? ""}`}</text>
            </div>
            <div className="screen-body md-outer-container">
                make donation
            </div>
        </div>
    );
}

export default MakeDonation;