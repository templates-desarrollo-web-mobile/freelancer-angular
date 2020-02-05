import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  @Input() title: string;
  @Input() dark = false;
  @Input() main = false;
  color: string;
  divider: string;
  constructor() { }

  ngOnInit() {
    if (this.dark) {
      this.color = 'text-secondary';
      this.divider = '';
    } else {
      this.color = 'text-white';
      this.divider = 'divider-light';
    }
  }

}
