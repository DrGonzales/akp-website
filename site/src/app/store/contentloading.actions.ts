import { Action } from '@ngrx/store';
import { Sections } from '../model/contentInterface';

export enum ActionTypes {
    LoadContent = '[Content] Load Content',
    LoadContentSuccess = '[Content] Load Content finished',
}

export class LoadContentLoadAction implements Action {
    readonly type = ActionTypes.LoadContent;
}

export class LoadContentSuccessAction implements Action {
    readonly type = ActionTypes.LoadContentSuccess;
    constructor(public payload: Sections[]) { }
}

export type ContentLoadingActions =
        | LoadContentLoadAction
        | LoadContentSuccessAction;
