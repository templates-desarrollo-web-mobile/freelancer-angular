import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IModal } from '@widgets/modal/modal.interface';
import { ModalComponent } from '@widgets/modal/modal.component';

@Component({
  selector: 'app-image-item',
  templateUrl: './image-item.component.html',
  styleUrls: ['./image-item.component.css']
})
export class ImageItemComponent implements OnInit {
  @Input() info: IModal;
  constructor(private modalService: NgbModal) {}
  ngOnInit() { }
  open() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.info = this.info;
  }

}
