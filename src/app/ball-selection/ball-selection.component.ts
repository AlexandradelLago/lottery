import { Component, OnInit} from '@angular/core';
import {GameServiceService} from '../services/game-service.service';

@Component({
  selector: 'app-ball-selection',
  templateUrl: './ball-selection.component.html',
  styleUrls: ['./ball-selection.component.scss']
})
export class BallSelectionComponent implements OnInit {
  ballBet:Array<any>=[];
  maxNumberOfBets:number=8;
  constructor(private game: GameServiceService) { }

  ngOnInit() {

  }


    setMyColor(i){
      let color ={
       'background': `radial-gradient(circle at 10px 10px,${this.game.balls[i].color}, #000)`
       // 'background': this.ballsColor[i]
      }
      return color ;
  }

  clearSelection(){
    this.ballBet=[];
    this.game.colors=["cambio"];
  }
  
  selectNumber(event){
  // doesnt allow user to bet to more than 8 balls 
    if (this.ballBet.length<this.maxNumberOfBets)
    this.ballBet.push(this.game.balls[event.srcElement.textContent-1]);
  }

   

  removeBet(i){
    this.ballBet.splice(i,1);
  }
}
