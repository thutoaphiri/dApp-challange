import React, { useState, useEffect } from "react";
import DonationPools from "./screens/DonationPools";
import MakeDonation from "./screens/MakeDonation";
import { EScholarshipPoolsScreens, SITE_VISITED_LS_KEY } from "./utils";
import { IScholarshipPool } from "./models";
import { EPopUpsActions } from "../../redux-store/actions/popups";
import { useDispatch } from "react-redux";

interface IComponentProps {}

const ScholarshipPools: React.FC<IComponentProps> = (props: IComponentProps) => {
    const dispatch = useDispatch();
    const [currentScreen, setCurrentScreen] = useState<EScholarshipPoolsScreens>(EScholarshipPoolsScreens.DONATION_POOLS);
    const [chosenSchoolForDonation, setChosenSchoolForDonation] = useState<IScholarshipPool>();

    useEffect(() => {
        const siteVisisted = localStorage.getItem(SITE_VISITED_LS_KEY);
        if (siteVisisted !== "YES") {
            localStorage.setItem(SITE_VISITED_LS_KEY, "YES");
            dispatch({
                type: EPopUpsActions.SHOW_POP_UP,
                payload: {
                    alertProps: {
                        alertHeading: "How To Donate",
                        alertBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure d olor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        buttonsProps: [
                            {
                                title: "Learn More",
                                onPress: () => {}
                            }
                        ]
                    }
                }
            });
        }

    }, []);
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
     * @param chosenPool: IScholarshipPool
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