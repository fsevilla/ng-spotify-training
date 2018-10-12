import { Directive, Input, AfterViewInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPopularity]'
})
export class PopularityDirective implements AfterViewInit {
   @Input() appPopularity: any;
  constructor(
  	private el: ElementRef
  ) { }

  ngAfterViewInit() {
  	if (this.appPopularity > 90)	{
  		this.el.nativeElement.className += ' popularity-high';
  	}
  }

}
