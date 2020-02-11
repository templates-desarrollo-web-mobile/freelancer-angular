import { Injectable } from '@angular/core';
import { ModalComponent } from './modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private modalService: NgbModal) {}

  open(name: string = 'Anartz') {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.name = name;
  }
}
