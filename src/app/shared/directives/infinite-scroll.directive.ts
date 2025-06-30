import { Directive, ElementRef, OnDestroy, output } from '@angular/core';

@Directive({
  selector: '[infiniteScroll]'
})
export class InfiniteScrollDirective implements OnDestroy {
  reached = output<void>();

  private observer: IntersectionObserver;

  constructor(private el: ElementRef<HTMLElement>) {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.reached.emit();
        }
      },
      {
        rootMargin: '0px',
        threshold: 1.0
      }
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.observer.disconnect();
  }
}
