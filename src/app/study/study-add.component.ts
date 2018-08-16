import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Study} from '../models/study.model';
import {StudyService} from './study.service';


@Component({
  selector: 'app-study-add',
  templateUrl: './study-add.component.html',
  styleUrls: ['./study-add.component.css']
})
export class StudyAddComponent implements OnInit {

  study: Study = new Study();

  constructor(private router: Router, private studyService: StudyService) { }

  createStudy(): void {
    this.studyService.createStudy(this.study).subscribe(data => {
      console.log('Study Class Room has been Created');
    });
  }

  ngOnInit() {
  }

}
