import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // private username: any;
  // private clientdetails: any = 

constructor(private http: HttpClient) { }

getRepo() {
  return this.http.get("https://api.github.com/users/" );

}

  // getProfileInfo(username:){
  //   console.log(this.username)
  //   return this.http.get("https://api.github.com//users/" + username + "?access_token=" + this.clientdetails)
  
  // }
  // getRepoInfo(){
  //   return this.http.get("https://api.github.com/users/" + this.username + "/repos" + "?access_token=" + this.clientdetails)
  // }

  // updateProfile(username:string){
  //   this.username = username;
  // }
}

