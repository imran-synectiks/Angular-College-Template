import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AttendanceService} from './attendace.service';
import { AttendanceModel} from '../models/attendance.model';

@Component({
  selector: 'app-attendanceview',
  templateUrl: './attendanceview.component.html',
  styleUrls: ['./attendanceview.component.css']
})
export class AttendanceviewComponent implements OnInit {

  attends: AttendanceModel[];

  constructor(private router: Router, private attendanceService: AttendanceService) { }

  ngOnInit() {
    this.attendanceService.getAttends()
      .subscribe(data => {
        this.attends = data;
      });
  }

  deleteAttend(attends: AttendanceModel): void {
    this.attendanceService.deleteAttend(attends)
      .subscribe(data => {
        this.attends = this.attends.filter(a => a !== attends);
      });
  }
}
