import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() data: any;
  @Input() canNavigate: boolean;
  constructor(
  	private router: Router
  ) { }

  ngOnInit() {
  }

  navigate(id: string) {
  	if(this.canNavigate) {
  		this.router.navigate(['/artist', id]);
  	}
  }

  setClassPopularity(): string {
    if (this.data.popularity > 80) {
      return ''
    }
  }

}
