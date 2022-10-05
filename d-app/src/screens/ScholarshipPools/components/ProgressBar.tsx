import React from "react";

interface IComponentProps {
    daysLeftToDonate: number
    totalDonations: number
    totals: {
        currentTotal: number
        grandTotal: number
    }
    donationNeeded: number
}

const ProgressBar: React.FC<IComponentProps> = (props: IComponentProps) => {
    return (
        <div className="pb-outer-container">
            <div className="top-panel">
                <text className="top-panel-text regular-font">
                    {`${props.daysLeftToDonate} ${props.daysLeftToDonate === 1 ? "day" : "days"} left`}
                </text>
                <text className="top-panel-text regular-font">
                    {`${props.totalDonations} ${props.totalDonations === 1 ? "person has" : "people have"} donated`}
                </text>
            </div>
            <div className="progress-bar-outer">
                <div
                    className="progress-bar-inner"
                    style={{
                        width: `${props.totals.currentTotal / props.totals.grandTotal * 100}%`
                    }}
                />
            </div>
            <text className="p bold-font">
                {`$${props.donationNeeded} to fund the next scholarship`}
            </text>
        </div>
    );
}

export default ProgressBar;