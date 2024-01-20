import { Injectable } from '@angular/core';
import {students} from "./students";

@Injectable({
  providedIn: 'root'
})
export class SimpleServiceService {

  public students: any[] = [];

  constructor() { }

  showPrompt() {
    window.alert("THIS IS FROM SERVICE")
  }

  getStudents() {
    this.students = students;
  }
}
