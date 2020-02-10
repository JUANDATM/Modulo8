import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor( private el: ElementRef) {
    // el.nativeElement.style.backgroundColor = "yellow";
  }

  @Input("appResaltado") nuevoColor : string;

  @HostListener('mouseenter') mauseEntro(){
    this.resaltar(this.nuevoColor || 'yellow');
  }
  @HostListener('mouseleave') mauseSalio(){
    this.resaltar(null)
  }
  private resaltar(color :string){
    this.el.nativeElement.style.backgroundColor = color;

  }



}
