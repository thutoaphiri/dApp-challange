import React from "react";
import { IScholarshipPool } from "../models";
import StatsTile from "./StatsTile";
import ProgressBar from "./ProgressBar";
import Button from "../../../components/Button/Button";
import { useSelector, useDispatch } from "react-redux";
import { IWallet } from "../../../redux-store/reducers/wallet";
import { RootState } from "../../../redux-store/reducers";
import { IPopUp } from "../../../redux-store/reducers/popups";
import { EPopUpsActions } from "../../../redux-store/actions/popups";
import { EWalletActions } from "../../../redux-store/actions/wallet";

interface IComponentProps {
    scholarshipDetails: IScholarshipPool
    makeDonation: () => void
}

const AvailableScholarshipCard: React.FC<IComponentProps> = ({ scholarshipDetails, makeDonation }: IComponentProps) => {
    const dispatch = useDispatch()
    const { schoolDetails, donationDetails} = scholarshipDetails;

    const isWalletConected = useSelector<
        RootState,
        IWallet["isWalletConnected"]
    >(state => state.wallet.isWalletConnected);

    const onConnectWallet = () => {
        dispatch({type: EWalletActions.CONNECT_WALLET});
        dispatch({type: EPopUpsActions.HIDE_POP_UP});
    }
    
    const makeDonationHandler = () => {
        if (isWalletConected) {
            makeDonation();
        } else {
            dispatch({
                type: EPopUpsActions.SHOW_POP_UP,
                payload: {
                    alertProps: {
                        alertHeading: "Wallet Not Connected",
                        alertBody: "Before you can donate to your chosen school, start by connecting your wallet.",
                        buttonsProps: [
                            {
                                title: "Connect My Wallet",
                                onPress: onConnectWallet
                            }
                        ]
                    }
                }
            })
        }
    }

    return (
        <div className="ssc-outer-container">
            <img
                className="school-image"
                alt={schoolDetails?.schoolName}
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