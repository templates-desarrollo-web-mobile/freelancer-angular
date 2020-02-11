import { Component, OnInit } from '@angular/core';
import { ModalService } from '@widgets/modal/modal.service';
import { IModal } from '@widgets/modal/modal.interface';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  items: Array<IModal> = [];
  ngOnInit() {
    this.items.push({title: 'Log Cabin', description: 'rrrr', image: 'assets/img/portfolio/cabin.png'});
    this.items.push({title: 'Tasty Cake', description: 'rrr', image: 'assets/img/portfolio/cake.png'});
    this.items.push({title: 'Circus Tent', description: 'rrr', image: 'assets/img/portfolio/circus.png'});
    this.items.push({title: 'Controller', description: 'tttt', image: 'assets/img/portfolio/game.png'});
    this.items.push({title: 'Locked Safe', description: 'ttt', image: 'assets/img/portfolio/safe.png'});
    this.items.push({title: 'Submarine', description: 'ttt', image: 'assets/img/portfolio/submarine.png'});
  }

}
