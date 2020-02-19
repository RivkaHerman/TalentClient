import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) {}

  private userUrl = "http://localhost:58406/api/users";

    public getAllUsersAsync(groupNumber:number): Observable<User[]> {
      return this.httpClient.get<User[]>(this.userUrl+ "/" + groupNumber); 
   }
}


   