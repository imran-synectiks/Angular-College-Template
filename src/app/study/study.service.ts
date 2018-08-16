import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Study} from '../models/study.model';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class StudyService {

  constructor(private http: HttpClient) {}

  private studyUrl = 'http://localhost:3001/study';
  // private studyUrl = 'http://localhost:8080/api/study';
  // private studyUrl = '/api';

  public getStudies() {
    return this.http.get<Study[]>(this.studyUrl);
  }

  public deleteStudy(study) {
    return this.http.delete(this.studyUrl + '/' + study.id);
  }

  public createStudy(study) {
    return this.http.post<Study>(this.studyUrl, study);
  }
  public editStudy(study) {
    return this.http.put<Study>(this.studyUrl, study);
  }
}
