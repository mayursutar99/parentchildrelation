import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {

  constructor(private user:HttpClient) { 

  }
  userDetails(){
    return this.user.get('https://jsonplaceholder.typicode.com/users');
  }
}
