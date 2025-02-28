import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective {

  constructor(private el: ElementRef) {
    
  }

  @HostListener('mouseenter') onMouseEnter() {
    //this.highlight('yellow');
    this.highlight(this.appHighlight || 'red');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

  @Input() appHighlight = '';
  
}
