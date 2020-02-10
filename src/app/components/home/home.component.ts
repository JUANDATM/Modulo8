import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
   <app-css></app-css>

    <app-ng-style></app-ng-style>

    <app-clases></app-clases>

    <p [appResaltado]="'aqua'">
      Hola Mundo
    </p>

    <app-nd-switch></app-nd-switch>

  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
