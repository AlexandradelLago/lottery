import { Component, OnInit, Input,Output, EventEmitter, SimpleChanges, setTestabilityGetter } from '@angular/core';
import balls from '../utils/data';


@Component({
  selector: 'app-bet-slip',
  templateUrl: './bet-slip.component.html',
  styleUrls: ['./bet-slip.component.scss']
})
export class BetSlipComponent implements OnInit {

@Input() ballBet:Array<any>;
@Input() numberOfBets:number;
@Output() onDelete = new EventEmitter<Number>();

ballHoles:Array<any>=[];
timesBet:number=5;
valueBet:number=0;
value:number=0;
won:boolean=false;
loser:boolean=false;
numberSelected:number;


  constructor() { }

  ngOnInit() {
   // this.valueBet= value*this.timesBet;
   console.log("estoy en oninit")
   //this.ballBet = this.ballHoles;
   //this.paintBalls(this.ballBet,this.numberOfBets)
  // this.paintHoles(this.numberOfBets);

  }
 
  get total(){
    return this.timesBet*this.ballBet.length*this.value;
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

  
  paintHoles(number){
    for (let i=0;i<number;i++){
          this.ballBet.push({number:null,color:'#003cff2a'});
      }  
    }

play(){
  this.numberSelected = Math.floor(Math.random()*10)+1;
  let timesWon = this.ballBet.filter((e)=>{
    return e.number==this.numberSelected;
  });
  if (timesWon.length>0){
    this.won= true;
  }else{
    this.loser = true;
  }
  setTimeout(()=>{this.loser=false; this.won=false}, 500);

}


  setMyColor(array, i){
    let color ={
      'background': `radial-gradient(circle at 10px 10px,${this.array[i].color}, #000)`
     // 'background': this.ballsColor[i]
    }
    return color ;
}

  onNumberDelete(i){
    this.onDelete.emit(i)
  }

}
