import React from "react";
import { useNavigate} from "react-router-dom";
import { EHeaderNavigatorRoutes, EHeaderNavigatorRoutesTitles } from "../../navigation-components/models";

interface IComponentProps {
    render: "LOGO_ONLY" | "LOGO_AND_NAME"
    canNavToHome: boolean
    setHeaderNavCurrentRoute?: (currentRoute: EHeaderNavigatorRoutesTitles) => void
}

const Logo: React.FC<IComponentProps> = (props: IComponentProps) => {
    const navigate = useNavigate();

    const navToHome = () => {
        if (props.setHeaderNavCurrentRoute){
            props.setHeaderNavCurrentRoute(EHeaderNavigatorRoutesTitles.SCHOLARSHIP_POOLS);
            navigate(EHeaderNavigatorRoutes.SCHOLARSHIP_POOLS);
        }
    }
    return (
        <a
            className="logo-outer-container button-hover-click-effect"
            style={{
                cursor: props.canNavToHome ? "pointer" : "default"
            }}
            href="https://directed.dev"
        >
            <img
                className="logo-image"
                alt="DirectEd Logo"
                src={require("../../assets/images/directed_logo.png")}
            />
            {
                props.render === "LOGO_AND_NAME" &&
                <div className="logo-name-container">
                    <text className="logo-name-text h5 bold-font">DirectEd</text>
                    <text className="logo-name-text p regular-font">Realising Potential</text>
                </div>
            }
        </a>
    );
}

export default Logo;