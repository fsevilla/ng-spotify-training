import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-holder',
  templateUrl: './card-holder.component.html',
  styleUrls: ['./card-holder.component.scss']
})
export class CardHolderComponent implements OnInit {
  @Input() title: string;
  @Input() dataSet: Array<any>;
  @Input() canNavigate = true;
  image: string;
  constructor() { 
  	//this.canNavigate = this.canNavigate !== false;
  }

  ngOnInit() {
  	console.log(this.canNavigate);
  }

}
