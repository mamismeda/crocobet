import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http :HttpClient) { }

  // get user Data from json 

  getData() : Observable<any>{
    
    const userUrl = "https://jsonplaceholder.typicode.com/users";
 
    return this.http.get<any>(userUrl);

  }

  // get posts Data from json
  
  getPost() : Observable<any>{
    
    const postUrl = "https://jsonplaceholder.typicode.com/posts";
    
    return this.http.get<any>(postUrl);

  }

}
