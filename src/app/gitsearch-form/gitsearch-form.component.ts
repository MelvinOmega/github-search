import { Component, OnInit } from '@angular/core';
import { Repository } from 'src/app/repository';
import { GitsearcherService } from 'src/app/gitsearcher.service';
import { Users } from 'src/app/users';
// import { GitsearchFormComponent } from 'src/app/gitsearch-form/gitsearch-form.component';
import { AppComponent } from '../app.component';
import { GitsearchComponent } from '../gitsearch/gitsearch.component';


@Component({
  selector: 'app-gitsearch-form',
  templateUrl: './gitsearch-form.component.html',
  styleUrls: ['./gitsearch-form.component.css']
})
export class GitsearchFormComponent implements OnInit {
  details: any;
  repos: any;
  username: any;

  constructor(private gitsearcherService: GitsearcherService) { }

  ngOnInit(): void {
  }
  findUser(){
    this.gitsearcherService.updateProfile(this.username);
    this.gitsearcherService.getProfileInfo(this.username).subscribe(this.details=>{
      console.log(this.details),
      this.details = this.details,
    });
    this.gitsearcherService.getRepoInfo().subscribe(this.repos=>{
      console.log(this.repos),
      this.repos = this.repos,
      
    });
  }

}
