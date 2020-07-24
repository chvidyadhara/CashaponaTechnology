import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserregsreService {
 userregurl = "https://api.mlab.com/api/1/databases/employeecurd/collections/cashapona?apiKey=NwUz6Go9-PSOYsRJS9tLR-p5idELeFx1"; 
 constructor(private http:HttpClient) { }
  userreturn(payload){
    return this.http.post(this.userregurl,payload)
  }
  userlist(){
    return this.http.get(this.userregurl)
  }

}
