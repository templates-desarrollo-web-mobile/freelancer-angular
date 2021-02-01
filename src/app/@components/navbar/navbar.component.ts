import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  menuOptionsActive: Array<boolean> = [
    true,
    false,
    false
  ];
  constructor() { }

  ngOnInit() {
  }

  select(itemPos: number) {
    for (let i = 0; i <= 3; i++) {
      this.menuOptionsActive[i] = (i === itemPos) ? true : false;
    }
  }

}
