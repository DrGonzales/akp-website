import { Sections } from '../model/contentInterface';
import { ContentLoadingActions, ActionTypes } from './contentloading.actions';

export interface ReducerContentLoadState {
    content: Sections[];
}

export const initialState: ReducerContentLoadState = {
    content: []
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
        default:
            return state;
    }
}
