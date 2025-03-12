import { Directive, ElementRef, EventEmitter, Output, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appLazyLoader]'
})
export class LazyLoaderDirective implements AfterViewInit {

  @Output() visible = new EventEmitter<boolean>();

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // console.log('Element is visible:', this.el.nativeElement);
          this.visible.emit(true);
          observer.unobserve(this.el.nativeElement); // Stop observing after first trigger
        }
      });
    }, { threshold: 0.2 }); // Adjust threshold as needed

    observer.observe(this.el.nativeElement);
  }
}
