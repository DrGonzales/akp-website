import { Action } from '@ngrx/store';
import { Content } from '../model/contentInterface';

export enum ActionTypes {
    LoadContent = '[Content] Load Content',
    LoadContentFinished = '[Content] Load Content finished',
}

export class LoadContentLoadAction implements Action {
    readonly type = ActionTypes.LoadContent;
}

export class LoadContentFinishedAction implements Action {
    readonly type = ActionTypes.LoadContentFinished;
    constructor(public payload: any) { }
}

export type ContentLoadingActions =
        | LoadContentLoadAction
        | LoadContentFinishedAction;
