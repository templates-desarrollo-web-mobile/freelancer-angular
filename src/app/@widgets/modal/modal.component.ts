import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IModal } from './modal.interface';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() content: IModal;

  constructor(public activeModal: NgbActiveModal) {}
  ngOnInit(): void {
  }

  close() {
    this.activeModal.dismiss();
  }

}
