import { Component, OnInit } from '@angular/core';
import balls from '../utils/data';

@Component({
  selector: 'app-ball-selection',
  templateUrl: './ball-selection.component.html',
  styleUrls: ['./ball-selection.component.scss']
})
export class BallSelectionComponent implements OnInit {
  balls = balls;
  constructor() { }

  ngOnInit() {
  }

}
