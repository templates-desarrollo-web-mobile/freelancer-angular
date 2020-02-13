import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { TitleModule } from '@widgets/title/title.module';

@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule
  ],
  exports: [ModalComponent]
})
export class ModalModule { }
