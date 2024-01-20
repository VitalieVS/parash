import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  SimpleChange,
  ViewChild
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SimpleServiceService} from "./simple-service.service";
import {MainComponent} from "./main/main.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterContentInit {
  title = 'parash';

  @ContentChild(MainComponent) main: any;

  constructor(public service: SimpleServiceService) {
    this.service.getStudents();
  }

  ngAfterContentInit() {
    console.log(this.main)
  }

}
