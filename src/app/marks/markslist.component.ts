import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Marking} from '../models/marks.model';
import {MarksService} from './marks.service';

@Component({
  selector: 'app-markslist',
  templateUrl: './markslist.component.html',
  styleUrls: ['./markslist.component.css']
})
export class MarkslistComponent implements OnInit {

  markings: Marking[];

  constructor(private router: Router, private markService: MarksService) { }

  ngOnInit() {
    this.markService.getMarks()
      .subscribe( data => {
        this.markings = data;
      });
  }

  deleteMark(marking: Marking): void {
    this.markService.deleteMark(marking)
      .subscribe( data => {
        this.markings = this.markings.filter(u => u !== marking);
      });
  }

}
