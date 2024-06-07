import { Component } from '@angular/core';
import { UserdetailsService } from './services/userdetails.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'practicechildparent';
  user:any;
  constructor(private userdata:UserdetailsService){
    userdata.userDetails().subscribe((data)=>{
      this.user=data;
  });
  }
}
