import { Component, OnInit } from '@angular/core';
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
  details: any ;
  repos:any;
  username!: string;

  constructor(private gitsearcherService: GitsearcherService) { }

  ngOnInit() {
  }
  findUser(){
    this.gitsearcherService.updateProfile();
    this.gitsearcherService.getProfileInfo(this.username).subscribe(details => {
      console.log(details);
      this.details = details;
    });
    this.gitsearcherService.getRepoInfo().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
  })
}
}
