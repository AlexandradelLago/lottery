import { Injectable } from '@angular/core';
import {balls, ballsBets} from '../utils/data';

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {
colors:Array<any>=[1,2, "tico","andres","davinia"];
balls:Array<any>=balls;
ballsBets : Array<any> = ballsBets;
  constructor() { }

  getColors(){
    return this.colors;
  }

  
}
