import React from "react";

interface IComponentProps {}

const ScholarsProgress: React.FC<IComponentProps> = (props: IComponentProps) => {
    return (
        <div className="screen">
            <text className="screen-heading bold-font h3">Scholars' Progress Screen</text>
        </div>
    );
}

export default ScholarsProgress;