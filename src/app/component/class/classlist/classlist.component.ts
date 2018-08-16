import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classlist',
  templateUrl: './classlist.component.html',
  styleUrls: ['./classlist.component.css']
})
export class ClasslistComponent implements OnInit {

  details: {
    code: any,
    name: string,
    description: string
  }[]

  constructor() { }

  ngOnInit() {
    this.details = [{code: 'c01', name: 'Information Technology', description: 'First Year'},
      {code: 'c02', name: 'Electrical Engineering', description: 'First Year'},

    ]

  }

}
