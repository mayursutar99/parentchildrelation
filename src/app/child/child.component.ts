import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  @Input() selectedUser: any;
  @Output() updateUser = new EventEmitter<any>();
  submitForm() {
    this.updateUser.emit(this.selectedUser);
  }
}
