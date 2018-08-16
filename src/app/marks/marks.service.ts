import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Marking, Category,SubCategory} from '../models/marks.model';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class MarksService {

  constructor(private http: HttpClient) { }
  private markUrl = 'http://localhost:3001/marks';

  getCategories() {
    return [
      new Category(1, 'Expense'),
      new Category(2, 'Income'),
      new Category(3, 'Miscellaneous')
    ];
  }
  getSubCategories() {
    return [
      new SubCategory(1, 1, 'Expense 1'),
      new SubCategory(2, 1, 'Expense 2'),
      new SubCategory(3, 1, 'Expense 3'),
      new SubCategory(4, 1, 'Expense 4'),
      new SubCategory(5, 2, 'Income 1'),
      new SubCategory(6, 2, 'Income 2'),
      new SubCategory(7, 2, 'Income 3'),
      new SubCategory(8, 3, 'Miscellaneous 1'),
      new SubCategory(9, 3, 'Miscellaneous 2'),
      new SubCategory(10, 3, 'Miscellaneous 3')
    ];
  }
  public getMarks() {
    return this.http.get<Marking[]>(this.markUrl);
  }

  public deleteMark(mark) {
    return this.http.delete(this.markUrl + '/' + mark.id);
  }

  public createMark(mark) {
    return this.http.post<Marking>(this.markUrl, mark);
  }
  public editMark(mark) {
    return this.http.put<Marking>(this.markUrl, mark);
  }

}
