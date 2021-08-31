import { Component, OnInit } from '@angular/core';
// import {repository} from 'src/app/repository';
import {Users} from 'src/app/users';
import { GitsearcherService } from 'src/app/gitsearcher.service'
import { GitsearchFormComponent } from 'src/app/gitsearch-form/gitsearch-form.component';
import { RepositoriesComponent } from 'src/app/repositories/repositories.component'

import { AppComponent } from 'src/app/app.component';
import {FormsModule} from '@angular/forms';



@Component({
  selector: 'app-gitsearch',
  templateUrl: './gitsearch.component.html',
  styleUrls: ['./gitsearch.component.css']
})
export class GitsearchComponent implements OnInit {
  repos: any;
  details: any;
  username!: string;

  constructor(private gitsearcherService: GitsearcherService) { }

  ngOnInit(): void {    
  }

  findUser(){
    this.gitsearcherService.updateProfile();
    this.gitsearcherService.getProfileInfo(this.username).subscribe((details: any) => {
      console.log(details);
      this.details = details;
    });
    this.gitsearcherService.getRepoInfo().subscribe((repos: any) => {
      console.log(repos);
      this.repos = repos;
  })      

}
}