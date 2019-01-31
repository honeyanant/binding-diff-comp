import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-testcomp-a',
  templateUrl: './testcomp-a.component.html',
  styleUrls: ['./testcomp-a.component.scss']
})
export class TestcompAComponent {

  @Input() compAInput: string;
  @Output() compAInputChange = new EventEmitter<string>();
  showCompAInput($event) {
    this.compAInput = $event.target.value;
    this.compAInputChange.emit(this.compAInput);
  }


}
