import { Directive, ElementRef, EventEmitter, Output, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appLazyLoader]'
})
export class LazyLoaderDirective implements AfterViewInit {

  @Output() visible = new EventEmitter<boolean>();

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) { // Detects any intersection
          console.log('Element is visible:', this.el.nativeElement);
          this.visible.emit(true);
          observer.unobserve(entry.target); // Stop observing after trigger
        }
      });
    }, {
      root: null, // Uses viewport as root
      rootMargin: '300px 0px', // Triggers when the element is still 200px below viewport
      threshold: 0.01 // Element only needs to be 1% visible
    });

    observer.observe(this.el.nativeElement);
  }
}
