import { EPopUpTypes } from "../../components/PopUp/models";
import { IAlertProps } from "../../components/PopUp/components/Alert";
import { EPopUpsActions } from "../actions/popups";


export interface IPopUp {
    popUpVisible: boolean
    popUpType?: EPopUpTypes
    alertProps?: IAlertProps
}
const initialState: IPopUp = {
    popUpVisible: false
};

export const popUpReducer = (
    state: IPopUp = initialState,
    action: {
        type: EPopUpsActions,
        payload: {
            popUpType?: EPopUpTypes
            alertProps?: IAlertProps
        }
    }
) => {
    switch (action.type) {
        case EPopUpsActions.SHOW_POP_UP:
            return {
                popUpVisible: true,
                ...action?.payload
            };
        case EPopUpsActions.HIDE_POP_UP:
            return {};
    
        default:
            return state;
    }
};