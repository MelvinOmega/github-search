import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  repo: any;
  details: any;
  username: string; 

  constructor(private dataService:DataService) { }

  ngOnInit(): void {

  }
  findUser(){
    this.gitsearcherService.getRepoInfo().subscribe(repos =>) {
      console.log(repos);
      this.repos = repos;
    }
  }

}


