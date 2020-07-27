import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ContentAdapterService } from '../share/content-adapter-service';
import { ActionTypes, LoadContentSuccessAction } from './contentloading.actions';

@Injectable()
export class ContentLoadingEffects {
   constructor(private actions$: Actions, private contentloadService: ContentAdapterService) { }

   @Effect()
   loadContent$ = this.actions$.pipe(
      ofType(ActionTypes.LoadContent),
      switchMap(() => this.contentloadService.getContent().pipe(
         map(content => {
            return new LoadContentSuccessAction(content)
         }),
         catchError(error => of(error))
      ))
   );
}