import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {

  constructor(private user:HttpClient) { 

  }
  userDetails(){
    return this.user.get('https://mocki.io/v1/506a4051-f31c-4d70-8fce-e9e83e8b4394');
  }
}
