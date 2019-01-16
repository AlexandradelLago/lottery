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
  constructor() { }

  ngOnInit() {
   this.ballsColor =  this.generateRandomColor(this.ballsColor);


  }

 /* changeBackgroundColor() {
    var colorBg =   document.getElementById("color-overlay")
    colorBg.style.backgroundColor = this.generateRandomColor(this.ballsColor);
  }*/

  generateRandomColor(ballsColor) {
    let i=0;
    while (i<10){
      ballsColor.push( `radial-gradient(circle at 10px 10px,#${Math.floor(Math.random()*16777215).toString(16)}, #000)`);
      i++;
    }
    return ballsColor ;
    }

    setMyColor(i){
      let color ={
        'background': this.ballsColor[i]
      }
      return color ;
  }

  clearSelection(){

  }
  
  selectNumber(event){
    console.log(`number selected is :${event.currentTarget}`)
    console.log(event.srcElement.textContent)
   /* let betBall = {
      numberBet : any =event.srcElement.textContent,
      color=
    }*/
    this.ballBet.push(event.srcElement.textContent);
  
  }

  removeBet(i){
    this.ballBet.splice(i,1);
  }
}
