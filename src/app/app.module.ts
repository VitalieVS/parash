import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainComponent} from "./main/main.component";
import {RouterModule, ROUTES, Routes} from "@angular/router";
import {AppIfDirective} from "./app-if.directive";
import {AppComponent} from "./app.component";
import {RepeatDirective} from "./repeat.directive";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {DefaultComponent} from "./default/default.component";

const routes: Routes = [
  {
    path: "",
    component: MainComponent
  }
];

@NgModule({
  declarations: [MainComponent, AppIfDirective, AppComponent, RepeatDirective, DefaultComponent],
  providers: [AppIfDirective, RepeatDirective],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppModule { }
