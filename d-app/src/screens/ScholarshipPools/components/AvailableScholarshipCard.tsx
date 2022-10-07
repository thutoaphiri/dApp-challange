import React from "react";
import { IScholarshipPool } from "../models";
import StatsTile from "./StatsTile";
import ProgressBar from "./ProgressBar";
import Button from "../../../components/Button/Button";
import { useSelector } from "react-redux";
import { IWallet } from "../../../redux-store/reducers/wallet";

interface IComponentProps {
    scholarshipDetails: IScholarshipPool
    makeDonation: () => void
}

const AvailableScholarshipCard: React.FC<IComponentProps> = ({ scholarshipDetails, makeDonation }: IComponentProps) => {
    const { schoolDetails, donationDetails} = scholarshipDetails;

    const isWalletConected = useSelector<
        IWallet,
        IWallet["isWalletConnected"]
    >(state => state.isWalletConnected);
    
    const makeDonationHandler = () => {
        if (isWalletConected) {
            makeDonation();
        }
    }
    return (
        <div className="ssc-outer-container">
            <img
                className="school-image"
                alt={`Image of ${schoolDetails?.schoolName}`}
                src={schoolDetails?.schoolImage}
            />
            <div className="body-container">
                <div className="body">
                    <text className="school-name bold-font h4">{scholarshipDetails.schoolDetails.schoolName}</text>
                    <a
                        className="regular-font"
                        href={schoolDetails?.schoolFullDetailsUrl}
                    >read more</a>
                    <div className="stats-block">
                        <StatsTile
                            value={donationDetails?.numberOfFundedScholarships}
                            heading="Scholarships funded"
                        />
                        <div className="section-breaker-vertical" />
                        <StatsTile
                            value={donationDetails?.numberOfAvailablePupilsToFund}
                            heading="Remaining scholarship naming right"
                        />
                    </div>
                    <div className="section-break-horizontal" />
                    <ProgressBar
                        totals={{
                            grandTotal: donationDetails?.numberOfFundedScholarships + donationDetails?.numberOfAvailablePupilsToFund,
                            currentTotal: donationDetails?.numberOfFundedScholarships
                        }}
                        daysLeftToDonate={donationDetails?.donationRoundDaysLeft}
                        donationNeeded={donationDetails?.costToFundNextPupil}
                        totalDonations={donationDetails?.numberOfPeopleDonated}
                    />
                </div>
                <Button
                    title="Donate Now"
                    onPress={makeDonationHandler}
                />
            </div>
        </div>
    );
}

export default AvailableScholarshipCard;