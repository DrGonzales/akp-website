/*
  Holt ein Bild aus dem Icon-Array
*/
import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({name: 'samplepipe'})
export class SamplePipe implements PipeTransform {
  transform(value: Array<string>): string {
    return _.sample(value);
  }
}
