import { Injectable } from '@angular/core';
import balls from '../utils/data';

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {
colors:Array<any>=[1,2, "tico","andres","davinia"];
balls:Array<any>=balls;
  constructor() { }

  getColors(){
    return this.colors;
  }
}
