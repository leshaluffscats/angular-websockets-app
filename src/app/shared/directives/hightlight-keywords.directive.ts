import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { debounceTime, fromEvent, take } from 'rxjs';

@Directive({
  selector: '[appHightlightKeywords]',
  standalone: true,
})
export class HightlightKeywordsDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('input') onInput() {
    fromEvent<InputEvent>(this.el.nativeElement, 'input')
      .pipe(debounceTime(500), take(1))
      .subscribe(console.log);
  }
}
