import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Study} from '../models/study.model';
import {StudyService} from './study.service';


@Component({
  selector: 'app-study',
  templateUrl: './study.component.html',
  styleUrls: ['./study.component.css']
})
export class StudyComponent implements OnInit {

  studies: Study[];

  constructor(private router: Router, private studyService: StudyService) { }

  ngOnInit() {
    this.studyService.getStudies().subscribe( data => {
      this.studies = data;
    });
  }

  deleteStudy( study: Study): void {
    this.studyService.deleteStudy(study).subscribe(data => {
      this.studies = this.studies.filter(s => s !== study);
    });
  }
}
