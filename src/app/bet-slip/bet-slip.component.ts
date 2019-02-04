import { Component,Input,Output, EventEmitter, OnChanges,SimpleChanges} from '@angular/core';
import {GameServiceService} from '../services/game-service.service';

@Component({
  selector: 'app-bet-slip',
  templateUrl: './bet-slip.component.html',
  styleUrls: ['./bet-slip.component.scss']
})
export class BetSlipComponent implements OnChanges {

@Input() ballBetSelected: any ;
@Input() numberOfBets:number;
@Output() nextBet = new EventEmitter<boolean>();
@Output() winNumber = new EventEmitter<number>();

allBallBets: string[] =[];

ballsBets: Array<any>;
timesBet: number = 5;
valueBet: number = 0;
value: number=1;
credit:number= 1000;
won:boolean=false;
loser:boolean=false;
numberSelected:number;


  constructor(private game: GameServiceService) {
    // so its duplicate array
    this.ballsBets = JSON.parse (JSON.stringify(this.game.ballsBets));

  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    for (let elem in changes) {  
      let change = changes[elem];
      let curVal  = change.currentValue;
      // let curValLOG = JSON.stringify(change.currentValue)
      // let prevVal = JSON.stringify(change.previousValue);
      // let changeLog = `${elem}: currentValue = ${curValLOG}, previousValue = ${prevVal}`;
      // console.log(changeLog);
      if (elem === 'ballBetSelected') {
        if (curVal == null){
          // remove the current selection if we are clearing selection
          curVal = this.game.ballsBets[0];
          this.ballsBets[this.numberOfBets]=curVal;
        }else{
          this.ballsBets[this.numberOfBets-1]=curVal;
        }
      } 
    }
  }

  get total(){
    return this.timesBet*this.value;
  }

play() {

  if (this.ballBetSelected!= null){
    let numberSelected = Math.floor(Math.random()*10)+1;
    this.winNumber.emit(numberSelected);
    if (this.ballBetSelected.number==numberSelected){
      this.won= true;
      this.credit = this.credit + this.value * this.timesBet * 1.5;
    }else{
      this.loser = true;
      this.credit = this.credit - this.value*this.timesBet * 1.5;
    }
    setTimeout(()=>{this.loser=false; this.won=false}, 1000);
    this.ballBetSelected = null;
    this.nextBet.emit(true)
   
  }

}


  setMyColor(i){
    return {
      'background': `radial-gradient(circle at 10px 10px,${this.ballsBets[i].color}, #000)`
  
    }
}

}
