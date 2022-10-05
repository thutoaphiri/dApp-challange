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

const Header: React.FC<IComponentProps> = (props: IComponentProps) => {
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
        <div className="header-footer-outer-container header-outer-container">
            <Logo
                render="LOGO_AND_NAME"
                canNavToHome={true}
                setHeaderNavCurrentRoute={props.setHeaderNavCurrentRoute}
            />
            <div className="header-nav-actions-container">
                <HeaderItem
                    title={EHeaderNavigatorRoutesTitles.SCHOLARSHIP_POOLS}
                    isSelected={props.currrentRoute === EHeaderNavigatorRoutesTitles.SCHOLARSHIP_POOLS}
                    onPress={onNavigate}
                />
                <HeaderItem
                    title={EHeaderNavigatorRoutesTitles.SCHOLARS_PROGRESS}
                    isSelected={props.currrentRoute === EHeaderNavigatorRoutesTitles.SCHOLARS_PROGRESS}
                    onPress={onNavigate}
                />
                <HeaderItem
                    title={EHeaderNavigatorRoutesTitles.MY_TRANSACTIONS}
                    isSelected={props.currrentRoute === EHeaderNavigatorRoutesTitles.MY_TRANSACTIONS}
                    onPress={onNavigate}
                />
            </div>
            <Button
                title = "Connect Wallet"
                onPress = {() => {}}
                additionalButtonStyle="header-cta"
                additionalButtonTitleStyle="header-cta-title"
            />
        </div>
    );
}

export default Header;