import { EWalletActions } from "../actions/wallet";

export interface IWallet {
    isWalletConnected: boolean
}
const initialState: IWallet = {
    isWalletConnected: false
};

export const walletReducer = (
    state: IWallet = initialState,
    action: {
        type: EWalletActions,
    }
) => {
    switch (action.type) {
        case EWalletActions.CONNECT_WALLET:
            return {
                isWalletConnected: true,
            };
        case EWalletActions.DISCONNECT_WALLET:
            return {
                isWalletConnected: false,
            };
    
        default:
            return state;
    }
};