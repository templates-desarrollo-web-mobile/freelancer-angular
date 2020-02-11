import { Component, OnInit } from '@angular/core';
import { ModalService } from '@widgets/modal/modal.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(private modal: ModalService) { }

  ngOnInit() {
  }

  open() {
    this.modal.open({
      title: 'Anartz',
      description: 'probando'
    });
  }

}
