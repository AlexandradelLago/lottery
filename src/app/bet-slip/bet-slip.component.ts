import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-bet-slip',
  templateUrl: './bet-slip.component.html',
  styleUrls: ['./bet-slip.component.scss']
})
export class BetSlipComponent implements OnInit {
selected: Array<Number> =[null,null,null,null];
/*timesBet:Number=5;
valueBet:Number=0;*/
value:Number=0;
@Input() ballBet:any;
@Output() onDelete = new EventEmitter<Number>();
  constructor() { }

  ngOnInit() {
   // this.valueBet= value*this.timesBet;
   this.selected=this.ballBet;
  }
 
  onNumberDelete(i){
    this.onDelete.emit(i)
  }

}
