import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface validateUsername{
  "available":boolean
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  checkUserName(username:string){
    return this.http.post<validateUsername>('https://api.angular-email.com/auth/username',{
      username
    })
  }


}
