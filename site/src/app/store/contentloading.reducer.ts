import { Sections, Card } from '../model/contentInterface';
import { ContentLoadingActions, ActionTypes } from './contentloading.actions';

export interface ReducerContentLoadState {
    content: Sections[];
    card: Card;
    gallery: string[];
    nocontent: boolean;
}

export const initialState: ReducerContentLoadState = {
    content: [],
    card: null,
    gallery: [],
    nocontent: true
};

export function contentLoadReducer(
    state = initialState,
    action: ContentLoadingActions,

): ReducerContentLoadState {
    switch (action.type) {
        case ActionTypes.LoadContentSuccess: {
            return {
                ...state,
                content: action.payload
            };
        }
        case ActionTypes.LoadPortfolioContentSuccess: {
            return {
                ...state,
                card: action.payload.card,
                gallery: action.payload.pictures,
                nocontent: action.payload.nocontent
            }
        }
        default:
            return state;
    }
}
