import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Action, Store } from '@ngrx/store';
import { ContentLoaderState, LoadPortfolioContentLoadAction } from '../store';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';


@Injectable({providedIn: 'root'})
export class PortfolioContentLoadResolver implements Resolve<Action>{
    constructor(
        private store: Store<ContentLoaderState>,
    ) {}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        const payload = {
            gallery: route.paramMap.get('section'),
            card: route.paramMap.get('portfolio')
        };
        this.store.dispatch(new LoadPortfolioContentLoadAction(payload));
        return of('Portfolio Resolver :)');
    }
}


