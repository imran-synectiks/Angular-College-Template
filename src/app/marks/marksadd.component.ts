import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MarksService} from './marks.service';
import {Marking, Category, SubCategory} from '../models/marks.model';


@Component({
  selector: 'app-marksadd',
  templateUrl: './marksadd.component.html',
  styleUrls: ['./marksadd.component.css']
})
export class MarksaddComponent implements OnInit {

  mark:  Marking = new Marking();
  Categories: Category[];
  numbers: number[] = [1, 2, 3];

  constructor(private router: Router, private markService: MarksService) {this.Categories = markService.getCategories(); }

  createMark(): void {
    this.markService.createMark(this.mark)
      .subscribe( data => {
        console.log('Marks Added Successfully');
      });
  }

  ngOnInit() {
  }

}
