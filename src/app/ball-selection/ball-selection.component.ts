import { Component, OnInit} from '@angular/core';
import {GameServiceService} from '../services/game-service.service';

@Component({
  selector: 'app-ball-selection',
  templateUrl: './ball-selection.component.html',
  styleUrls: ['./ball-selection.component.scss']
})
export class BallSelectionComponent implements OnInit {
  ballsComponent;
  ballsColor:Array<string> =[];
  betsCounter : number = 0;
  ballBet:   number;
  pendingBet: boolean = true;
  maxNumberOfBets:number=8;
  constructor(private game: GameServiceService) {
    this.ballsComponent = this.game.balls;
   }

  ngOnInit() {
  }


    setMyColor(i){
          return {'background': `radial-gradient(circle at 10px 10px,${this.game.balls[i].color}, #000)`}
    }
    

  clearSelection(){
    // just allows to clear selection if there is a bet
    this.toggleBet();
    this.betsCounter--;
    this.ballBet = null;
  }
  
  selectNumber(event){
  // doesnt allow user to bet more once a ball is picked
    if (this.pendingBet){
      this.betsCounter++;
      this.ballBet = this.game.balls[event.srcElement.textContent-1];
      this.toggleBet();
    }
  
  }


  winBall(event){
    return 5;
  }

  removeBet(){
    this.toggleBet();
  }

  toggleBet(){
    this.pendingBet = !this.pendingBet;
  }
}
