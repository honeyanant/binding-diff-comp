import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testcomp-a',
  templateUrl: './testcomp-a.component.html',
  styleUrls: ['./testcomp-a.component.scss']
})
export class TestcompAComponent {

  compAInput: string;
  showCompAInput($event) {
    this.compAInput = $event.target.value;
  }


}
