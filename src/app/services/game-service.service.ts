import { Injectable } from '@angular/core';
import {balls, ballsBets} from '../utils/data';

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {
balls:Array<any>=balls;
ballsBets : Array<any> = ballsBets;
toBet: boolean = true;

  constructor() { }

  
}
