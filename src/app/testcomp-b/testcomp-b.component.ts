import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-testcomp-b',
  templateUrl: './testcomp-b.component.html',
  styleUrls: ['./testcomp-b.component.scss']
})
export class TestcompBComponent {
   @Input() compBInput: string;
   @Output() compBInputChange = new EventEmitter<string>();
    showCompBInput($event) {
    this.compBInput = $event.target.value;
    this.compBInputChange.emit(this.compBInput);
  }

}
