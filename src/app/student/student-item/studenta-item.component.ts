import { Component, OnInit, Input } from '@angular/core';
import {Student} from "../../models/studenttypes";
import { StudentService} from "../../services/student.service";

@Component({
  selector: 'app-student-item',
  templateUrl: './student-item.component.html',
  styleUrls: ['./studentadd.component.css']
})
export class StudentaItemComponent implements OnInit {
  @Input() student: Student;

  constructor(private studentService: StudentService) { }

  ngOnInit() {
  }
}
