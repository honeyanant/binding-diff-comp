import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testNg';

  appInput: string;
  showAppInput($event) {
    this.appInput = $event.target.value;
  }
}
