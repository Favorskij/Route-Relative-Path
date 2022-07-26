import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.css']
})
export class PageOneComponent implements OnInit {

  constructor(private router: Router, private relativeTo: ActivatedRoute) { }

  ngOnInit(): void {
  }

  navigateHome() {

    // this.router.navigate([''])
    // this.router.navigate(['/two'], {relativeTo: this.relativeTo})
    this.router.navigateByUrl('two')


  }

}
