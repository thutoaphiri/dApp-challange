import React from "react";
import { EHeaderNavigatorRoutesTitles } from "../models";

interface IComponentProps {
    currrentRoute: EHeaderNavigatorRoutesTitles;
    setHeaderNavCurrentRoute: (currentRoute: EHeaderNavigatorRoutesTitles) => void
}

const Footer: React.FC<IComponentProps> = (props: IComponentProps) => {

    return (
        <div className="header-footer-outer-container footer-outer-container">
            <div className="footer-actions-container">
                <a
                    href="https://directed.dev"
                    className="button button-hover-click-effect footer-cta"
                >
                    <text className="button-title footer-cta-title h5 bold-font">NEED HELP?</text>
                </a>
                <a
                    href="https://directed.dev"
                    className="button button-hover-click-effect footer-cta"
                >
                    <text className="button-title footer-cta-title h5 bold-font">HAVE A SUGGESTION?</text>
                </a>
            </div>
            <div
                className="legalities-outer-container"
                onClick={() => localStorage.clear()} //dummy onPress to simulate clearing localStorage.
            >
                <text className="legalities-text">Terms and Conditions | Privacy Policy</text>
                <text className="legalities-text">2022 DirectEd. All rights reserved.</text>
            </div>
        </div>
    );
}

export default Footer;