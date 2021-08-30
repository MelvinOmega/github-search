import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GitsearchComponent } from './gitsearch/gitsearch.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { AppComponent } from './app.component';
import { GitsearchFormComponent } from './gitsearch-form/gitsearch-form.component';

@Injectable()
export class GitsearcherService {
  private username!: string;
  private clientdetails: string = ''

  constructor(private http:HttpClient) { 
    console.log("service is now ready");
  }

  getProfileInfo(username: string) {
    console.log(this.username)
    return this.http.get("https://api.github.com/users/" + username + "?access_token=" + this.clientdetails)
  }
  getRepoInfo() {
    return this.http.get("https://api.github.com/users/" + this.username + "/repos" + "?access_token=" + this.clientdetails)

  }
  updateProfile() {
    this.username = this.username;
  }
}
