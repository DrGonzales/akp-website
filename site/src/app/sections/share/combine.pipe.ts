/*
Kombinert die Bilder der Cards zu einem Array
*/
import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';
import { Card } from 'src/app/model/contentInterface';

@Pipe({ name: 'combinepipe' })
export class CombinePipe implements PipeTransform {
    transform(value: Array<Card>): Array<string> {
        let bg: Array<string> = [];
        value.forEach(card => bg = bg.concat(card.icons));
        return bg;
    }
}
