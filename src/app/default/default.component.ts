import {AfterContentInit, Component, ContentChild} from '@angular/core';
import {MainComponent} from "../main/main.component";

@Component({
  selector: 'app-default',
  template: `
    <div>
      <ng-content></ng-content>
    </div>
  `,
})
export class DefaultComponent implements AfterContentInit {
  @ContentChild(MainComponent) childComponent: MainComponent;

  ngAfterContentInit() {
    console.log(this.childComponent); // Logs ChildComponent instance
  }
}
