import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <h1>Parent</h1>
    <app-child [message] = 'message'></app-child>
  `,
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }
message = 'Hello Imran Chai peelo'
  ngOnInit() {
  }

}
