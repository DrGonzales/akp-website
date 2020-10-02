import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { ReducerContentLoadState, contentLoadReducer } from './contentloading.reducer';

export const featureStateName = 'contentloader';


export interface ContentLoaderState {
    contentload: ReducerContentLoadState;
}

export const contentloadingReducers: ActionReducerMap<ContentLoaderState> = {
    contentload: contentLoadReducer
}

export const getContentLoadFeatureState = createFeatureSelector<ContentLoaderState>(
    featureStateName
);

export const getContentSelector = createSelector(
    getContentLoadFeatureState,
    (state: ContentLoaderState) => state.contentload.content);

export const getContactConfigSelector = createSelector(
    getContentLoadFeatureState,
    (state: ContentLoaderState) => state.contentload.contactConfig);
