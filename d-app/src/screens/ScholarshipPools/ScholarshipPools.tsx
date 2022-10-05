import React, { useState, useEffect } from "react";
import DonationPools from "./screens/DonationPools";
import MakeDonation from "./screens/MakeDonation";
import { EScholarshipPoolsScreens } from "./utils";
import { IScholarshipPool } from "./models";

interface IComponentProps {}

const ScholarshipPools: React.FC<IComponentProps> = (props: IComponentProps) => {
    const [currentScreen, setCurrentScreen] = useState<EScholarshipPoolsScreens>(EScholarshipPoolsScreens.DONATION_POOLS);
    const [chosenSchoolForDonation, setChosenSchoolForDonation] = useState<IScholarshipPool>();

    /**
     * useEffect hook to allow screens to toggle between showing user available donation pools and making a donation.
     * useEffect triggered by chosenSchoolForDonation state
     */
    useEffect(() => {
        if (typeof(chosenSchoolForDonation) === "undefined") {
            setCurrentScreen(EScholarshipPoolsScreens.DONATION_POOLS);
        } else {
            setCurrentScreen(EScholarshipPoolsScreens.MAKE_DONATION);
        }
    }, [chosenSchoolForDonation]);

    /**
     * 
     * @param chosenPool
     * @type IScholarshipPool
     * Method will be used to inform the application which pool the user wants to make a donaton for
     */
    const onMakeDonation = (chosenPool: IScholarshipPool) => {
        setChosenSchoolForDonation(chosenPool);
    }

    /**
     * goBack triggered when user wants to go back to see available donation pools
     * method resets chosenSchoolForDonation state to undefined.
     */
    const onGoBack = () => {
        setChosenSchoolForDonation(undefined);
    }

    return (
        <div className="screen">
            <div className="screens-container">
                <DonationPools
                    currentScreen={currentScreen}
                    makeDonation={onMakeDonation}
                    goBack={onGoBack}
                />
                <MakeDonation
                    currentScreen={currentScreen}
                    chosenDonationPool={chosenSchoolForDonation}
                    goBack={onGoBack}
                />
            </div>
        </div>
    );
}

export default ScholarshipPools;