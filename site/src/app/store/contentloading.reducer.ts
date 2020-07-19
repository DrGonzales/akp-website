import { Content } from '../model/contentInterface';
import { ContentLoadingActions, ActionTypes } from './contentloading.actions';

export interface PortfolioState {
    content: Content;
}

export const initialState: PortfolioState = {
    content: null
};

export function portfolioReducer(
    state = initialState,
    action: ContentLoadingActions,

): PortfolioState {
    switch (action.type) {
        case ActionTypes.LoadContentFinished: {
            return {
                ...state,
                content: action.payload
            };
        }
        default:
            return state;
    }
}
