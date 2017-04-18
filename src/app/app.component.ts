import { Component,
         ElementRef,
         HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app works!';
  element: ElementRef;

  constructor(private elementRef: ElementRef) {
    this.element = elementRef;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {

    var elementClassList = this.element.nativeElement.querySelector('.ptg-home-above-header').classList;

    if(window.pageYOffset > 150) {
      elementClassList.add('hidden');
    } else {
      elementClassList.remove('hidden');
    }
  }
}
