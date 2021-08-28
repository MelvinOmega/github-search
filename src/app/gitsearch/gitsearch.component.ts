import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gitsearch',
  templateUrl: './gitsearch.component.html',
  styleUrls: ['./gitsearch.component.css']
})
export class GitsearchComponent implements OnInit {
  details: any;
  repos: any;
  username: any;

  // constructor(private gitsearch) { }

  ngOnInit(): void {
  }

}
