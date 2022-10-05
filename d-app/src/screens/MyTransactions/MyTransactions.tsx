import React from "react";

interface IComponentProps {}

const MyTransactions: React.FC<IComponentProps> = (props: IComponentProps) => {
    return (
        <div className="screen">
            <text className="screen-heading bold-font h3">My Transactions Screen</text>
        </div>
    );
}

export default MyTransactions;