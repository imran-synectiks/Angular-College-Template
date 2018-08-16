import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { AttendanceModel} from '../models/attendance.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  constructor(private http: HttpClient) { }

  private  attendUrl = 'http://localhost:3001/attendance';

  public getAttends() {
    return this.http.get<AttendanceModel[]>(this.attendUrl);
  }

  public deleteAttend(attend) {
    return this.http.delete(this.attendUrl + '/' + attend.id);
  }

  public createAttend(attend) {
    return this.http.post<AttendanceModel>(this.attendUrl, attend);
  }

  public editAttend(attend) {
    return this.http.put<AttendanceModel>(this.attendUrl, attend);
  }
}
