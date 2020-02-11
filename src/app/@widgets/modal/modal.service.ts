import { Injectable } from '@angular/core';
import { ModalComponent } from './modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IModal } from './modal.interface';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private modalService: NgbModal) {}

  open(content: IModal) {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.content = content;
  }
}
