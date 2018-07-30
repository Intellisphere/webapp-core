import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sphr-auth-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogOutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate(['/login']);
  }

}
