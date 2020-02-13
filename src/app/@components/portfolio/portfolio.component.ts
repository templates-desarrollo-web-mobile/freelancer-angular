import { Component, OnInit } from '@angular/core';
import { IModal } from '@widgets/modal/modal.interface';
const imageRepository = 'https://raw.githubusercontent.com/plantillas-anartz/freelancer-angular/master/src/assets/img/portfolio/';
const description = `
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil,
                      molestias magnam, recusandae quos quis inventore quisquam velit
                      asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.`;
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  items: Array<IModal> = [];
  ngOnInit() {
    this.items.push ({
      title: 'Log cabin',
      image: `${imageRepository}cabin.jpeg`,
      description
    });
    this.items.push ({
      title: 'Tasty Cake',
      image: `${imageRepository}cake.jpeg`,
      description
    });
    this.items.push ({
      title: 'Circus',
      image: `${imageRepository}circus.jpeg`,
      description
    });
    this.items.push ({
      title: 'Game Game',
      image: `${imageRepository}game.jpeg`,
      description
    });
    this.items.push ({
      title: 'Log Safe',
      image: `${imageRepository}safe.jpeg`,
      description
    });
    this.items.push ({
      title: 'Yellow submarine',
      image: `${imageRepository}submarine.jpeg`,
      description
    });
  }

}
