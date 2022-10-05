import React from "react";
import { scholarshipPools_SAMPLE_DATA, EScholarshipPoolsScreens } from "../utils";
import { IScholarshipPool } from "../models";
import AvailableScholarshipCard from "../components/AvailableScholarshipCard";

interface IComponentProps {
    currentScreen: EScholarshipPoolsScreens
    makeDonation: (chosenPool: IScholarshipPool) => void
    goBack: () => void
}

const DonationPools: React.FC<IComponentProps> = (props: IComponentProps) => {
    return (
        <div
            className="dp-internal-screen"
            style={{
                right: props.currentScreen === EScholarshipPoolsScreens.DONATION_POOLS ? "0%" : "100%"
            }}
        >
            <text className="screen-heading bold-font h3">Scholarship Pools Screen</text>
            <div className="screen-body dp-outer-container">
                {
                    scholarshipPools_SAMPLE_DATA.map((
                        scholarshipPool: IScholarshipPool,
                        index: number
                    ) => {
                        return (
                            <AvailableScholarshipCard
                                key={`SCHOLARSHIP-POOL-CARD-${index}`}
                                scholarshipDetails={scholarshipPool}
                                makeDonation={() => props.makeDonation(scholarshipPool)}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
}

export default DonationPools;