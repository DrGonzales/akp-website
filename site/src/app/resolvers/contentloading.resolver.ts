import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Action, Store } from '@ngrx/store';
import { ContentLoaderState, LoadContentLoadAction } from '../store';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';


@Injectable({providedIn: 'root'})
export class ContentLoadResolver implements Resolve<Action>{
    constructor(
        private store: Store<ContentLoaderState>,
    ) {}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        this.store.dispatch(new LoadContentLoadAction());
        return of('Content Resolver :)');
    }
}


