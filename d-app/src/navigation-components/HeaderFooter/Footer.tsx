import React from "react";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import HeaderItem from "./components/HeaderItem";
import Logo from "../../components/Logo/Logo";
import { EHeaderNavigatorRoutesTitles, EHeaderNavigatorRoutes } from "../models";

interface IComponentProps {
    currrentRoute: EHeaderNavigatorRoutesTitles;
    setHeaderNavCurrentRoute: (currentRoute: EHeaderNavigatorRoutesTitles) => void
}

const Footer: React.FC<IComponentProps> = (props: IComponentProps) => {
    const navigate = useNavigate();

    const onNavigate = (chosenRoute: EHeaderNavigatorRoutesTitles) => {
        props.setHeaderNavCurrentRoute(chosenRoute);
        switch (chosenRoute) {
            case EHeaderNavigatorRoutesTitles.SCHOLARSHIP_POOLS:
                navigate(EHeaderNavigatorRoutes.SCHOLARSHIP_POOLS)
                break;
            case EHeaderNavigatorRoutesTitles.SCHOLARS_PROGRESS:
                navigate(EHeaderNavigatorRoutes.SCHOLARS_PROGRESS)
                break;
            case EHeaderNavigatorRoutesTitles.MY_TRANSACTIONS:
                navigate(EHeaderNavigatorRoutes.MY_TRANSACTIONS)
                break;
        
            default:
                break;
        }
    }
    return (
        <div className="header-footer-outer-container footer-outer-container">
            <div className="foota-actions-container">
                <Button
                    title = "NEED HELP?"
                    onPress = {() => {}}
                    additionalButtonStyle="footer-cta"
                    additionalButtonTitleStyle="footer-cta-title h5"
                />
                <Button
                    title = "HAVE A SUGGESTION?"
                    onPress = {() => {}}
                    additionalButtonStyle="footer-cta"
                    additionalButtonTitleStyle="footer-cta-title h5"
                />
            </div>
            <div className="legalities-outer-container">
                <text className="legalities-text p">Terms and Conditions | Privacy Policy</text>
                <text className="legalities-text p">2022 DirectEd. All rights reserved.</text>
            </div>
        </div>
    );
}

export default Footer;