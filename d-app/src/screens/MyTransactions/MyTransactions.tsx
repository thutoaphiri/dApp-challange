import React from "react";

interface IComponentProps {}

const MyTransactions: React.FC<IComponentProps> = (props: IComponentProps) => {
    return (
        <div className="bold-font h3">My Transactions Screen</div>
    );
}

export default MyTransactions;