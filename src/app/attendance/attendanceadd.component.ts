import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AttendanceModel } from '../models/attendance.model';
import { AttendanceService } from '../attendance/attendace.service';

@Component({
  selector: 'app-attendanceadd',
  templateUrl: './attendanceadd.component.html',
  styleUrls: ['./attendanceadd.component.css']
})
export class AttendanceaddComponent implements OnInit {
  Attendances= [
    'A', 'B', 'C', 'D', 'E', 'F'
  ];

  attend: AttendanceModel = new AttendanceModel();

  constructor(private router: Router, private attendanceService: AttendanceService) { }
createAttend(): void {
    this.attendanceService.createAttend(this.attend).subscribe(data => {
      console.log('Attendace created Successfully');
    });
}
  ngOnInit() {
  }

}
