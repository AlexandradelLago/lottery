import { Component, OnInit, Input,Output, EventEmitter, OnChanges,SimpleChanges, setTestabilityGetter } from '@angular/core';
import {GameServiceService} from '../services/game-service.service';

@Component({
  selector: 'app-bet-slip',
  templateUrl: './bet-slip.component.html',
  styleUrls: ['./bet-slip.component.scss']
})
export class BetSlipComponent implements OnChanges {

@Input() ballBetSelected: Object <any> ;
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
    //this.ballsBets = this.game.ballsBets;
   // var duplicateObject = JSON.parse(JSON.stringify( originalObject ));
    this.ballsBets = JSON.parse (JSON.stringify(this.game.ballsBets));

   }

  ngOnInit() {
   console.log("estoy en oninit del slip")
 // this.ballBetSelected.pop();
  }

  ngOnChanges(changes: SimpleChanges) {
  
    console.log(this.ballBetSelected)
	  
    for (let ballbets in changes) {  
      console.log("estoy dentro de onchanges")
      console.log(changes[ballbets])
      let change = changes[ballbets];
      
      let curVal  = change.currentValue;
     
      let curValLOG = JSON.stringify(change.currentValue)
      let prevVal = JSON.stringify(change.previousValue);
      let changeLog = `${ballbets}: currentValue = ${curValLOG}, previousValue = ${prevVal}`;
      console.log(changeLog);
      if (ballbets === 'ballBetSelected') {
        if (curVal == null){
          curVal = this.game.ballsBets[0];
          this.ballsBets[this.numberOfBets]=curVal;
        }else{
          this.ballsBets[this.numberOfBets-1]=curVal;
        }
      } 
      }
    }

 
//   _keyUp(event: any) {
//     const pattern = /[0-9\+\-\ ]/;
//     let inputChar = String.fromCharCode(event.charCode);

//     if (!pattern.test(inputChar)) {
//       // invalid character, prevent input
//       event.preventDefault();
//     }
// }

  get total(){
    return this.timesBet*this.value;
  }

/*   paintBalls(betBallsArray, number){
    console.log(number)
    for (let i=0;i<=number;i++){
      console.log('entro')
      if (!betBallsArray||betBallsArray.length<i){
        betBallsArray.push({color:'#003cff2a'})
        console.log(betBallsArray)
      }  
    }
  } */

  
  // paintHoles(number) {
  //   for (let i = 0; i < number; i++) {
  //         this.ballBetSelected.push({number: null, color: '#003cff2a'});
  //     };
  //   }

play() {
  let numberSelected = Math.floor(Math.random()*10)+1;
  
  // let timesWon = this.ballBetSelected.filter((e)=>{
  //   return e.number==this.numberSelected;
  // });
 // if (this.ballBetSelected)
  this.winNumber.emit(numberSelected);
  if (this.ballBetSelected.number==numberSelected){
    this.won= true;
    this.credit = this.credit + this.value * this.timesBet * 1.5;
  }else{
    this.loser = true;
    this.credit = this.credit - this.value*this.timesBet * 1.5;
  }
  setTimeout(()=>{this.loser=false; this.won=false}, 1000);
  this.nextBet.emit(true)
}


  setMyColor(i){
    return {
      'background': `radial-gradient(circle at 10px 10px,${this.ballsBets[i].color}, #000)`
     // 'background': this.ballsColor[i]
    }
}

  // allowNextBet(al){
  //   this.nextBet.emit(i)
  // }

}
