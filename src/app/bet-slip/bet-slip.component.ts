import { Component, OnInit, Input,Output, EventEmitter, SimpleChanges } from '@angular/core';


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
