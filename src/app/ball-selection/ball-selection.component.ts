import { Component, OnInit} from '@angular/core';
import balls from '../utils/data';

@Component({
  selector: 'app-ball-selection',
  templateUrl: './ball-selection.component.html',
  styleUrls: ['./ball-selection.component.scss']
})
export class BallSelectionComponent implements OnInit {
  balls = balls;
  ballsColor:Array<String> = [];
  ballBet:Array<any>=[];
  maxNumberOfBets:number=8;
  constructor() { }

  ngOnInit() {
    //this.ballsColor =  this.generateRandomColor(this.ballsColor);


  }

 /*  generateRandomColor(ballsColor) {
    let i=0;
    while (i<10){
      ballsColor.push( `radial-gradient(circle at 10px 10px,#${Math.floor(Math.random()*16777215).toString(16)}, #000)`);
      i++;
    }
    return ballsColor ;
    } */

    setMyColor(i){
      let color ={
        'background': `radial-gradient(circle at 10px 10px,${this.balls[i].color}, #000)`
       // 'background': this.ballsColor[i]
      }
      return color ;
  }

  clearSelection(){
    this.ballBet=[];
  }
  
  selectNumber(event){
  // doesnt allow user to bet to more than 8 balls 
    if (this.ballBet.length<this.maxNumberOfBets)
    this.ballBet.push(this.balls[event.srcElement.textContent-1]);
  }

  removeBet(i){
    this.ballBet.splice(i,1);
  }
}
