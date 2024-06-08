import { Component } from '@angular/core';
import { UserdetailsService } from './services/userdetails.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'practicechildparent';
  users:any;
  selectedUser: any;
  isFormVisible = false;
  constructor(private userdata:UserdetailsService){
    userdata.userDetails().subscribe((data)=>{
      this.users=data;
  });
  }
  editUser(user: any) {
    this.selectedUser = user;
    this.isFormVisible=true;
  }
  updateUser(updatedUser: any) {
    this.selectedUser = updatedUser;
    this.isFormVisible=false;
  }
}
