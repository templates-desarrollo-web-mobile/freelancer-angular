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
  constructor(private modal: ModalService) { }

  ngOnInit() {
    this.items.push({title: 'Log Cabin', description: '', image: ''});
    this.items.push({title: '', description: '', image: ''});
    this.items.push({title: '', description: '', image: ''});
    this.items.push({title: '', description: '', image: ''});
    this.items.push({title: '', description: '', image: ''});
    this.items.push({title: '', description: '', image: ''});
  }

  open() {
    this.modal.open({
      title: 'Anartz',
      description: 'probando',
      image: '/assets/img/portfolio/cabin.png'
    });
  }

}
