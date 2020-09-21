import { Action } from '@ngrx/store';
import { Sections, Card } from '../model/contentInterface';

export enum ActionTypes {
    LoadContent = '[Content] Load Content',
    LoadContentSuccess = '[Content] Load Content finished',
    LoadPortfolioContent = '[Portfolio] Load Content',
    LoadPortfolioContentSuccess = '[Portfolio] Load Content finished',
}

export class LoadContentLoadAction implements Action {
    readonly type = ActionTypes.LoadContent;
}

export class LoadPortfolioContentLoadAction implements Action {
    readonly type = ActionTypes.LoadPortfolioContent;
    constructor(public payload: { gallery: string, card: string }) { }
}

export class LoadContentSuccessAction implements Action {
    readonly type = ActionTypes.LoadContentSuccess;
    constructor(public payload: Sections[]) { }
}

export class LoadPortfolioContentSuccessAction implements Action {
    readonly type = ActionTypes.LoadPortfolioContentSuccess;
    constructor(public payload: { card: Card, pictures: Array<string>, nocontent: boolean }) { }
}

export type ContentLoadingActions =
        | LoadContentLoadAction
        | LoadContentSuccessAction
        | LoadPortfolioContentLoadAction
        | LoadPortfolioContentSuccessAction;
