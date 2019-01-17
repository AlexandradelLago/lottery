import { Component, OnInit, Input,Output, EventEmitter, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-bet-slip',
  templateUrl: './bet-slip.component.html',
  styleUrls: ['./bet-slip.component.scss']
})
export class BetSlipComponent implements OnInit {

@Input() ballBet:Array<any>=[];

@Output() onDelete = new EventEmitter<Number>();


timesBet:number=5;
valueBet:number=0;
value:number=0;
finalBet: any = (this.value * this.timesBet * this.ballBet.length);

  constructor() { }

  ngOnInit() {
   // this.valueBet= value*this.timesBet;
   console.log("estoy en oninit")

  }
 
  get total(){
    console.log("dentro del get")
    return this.timesBet*this.ballBet.length*this.value;
  }


  onNumberDelete(i){
    this.onDelete.emit(i)
  }

}
