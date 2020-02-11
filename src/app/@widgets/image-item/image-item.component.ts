import { Component, OnInit } from '@angular/core';
import { ModalService } from '@widgets/modal/modal.service';
import { IModal } from '@widgets/modal/modal.interface';

@Component({
  selector: 'app-image-item',
  templateUrl: './image-item.component.html',
  styleUrls: ['./image-item.component.css']
})
export class ImageItemComponent implements OnInit {

  constructor(private modal: ModalService) { }

  ngOnInit() {
  }

  open(content: IModal) {
    this.modal.open(content);
  }

}
