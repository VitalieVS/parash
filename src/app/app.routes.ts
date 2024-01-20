import { Routes } from '@angular/router';
import {MainComponent} from "./main/main.component";
import {AppComponent} from "./app.component";

export const routes: Routes = [
  {
    path: "",
    component: MainComponent
  },
  {
    path: "home",
    component: AppComponent
  }
];
