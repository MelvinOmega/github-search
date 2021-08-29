import { Component, OnInit } from '@angular/core';
// import { DataService } from '../data.service';
import { AppComponent } from '../app.component';
// import { Repository } from 'src/app/repository';
import { Users } from 'src/app/users';
import { GitsearcherService } from '../gitsearcher.service';
import { GitsearchFormComponent } from '../gitsearch-form/gitsearch-form.component';
import {  }


@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  repo: any;
  details: any;
  username: any; 
  // gitsearcherService: any;

  constructor(private gitsearcherService: GitsearcherService) { }

  ngOnInit(): void {

  }
  findUser(){
    this.gitsearcherService.getRepoInfo().subscribe(repos =>{
      console.log(repos);
      this.repo = repos
    })
  }

}



