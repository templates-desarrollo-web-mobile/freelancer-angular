import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { TitleModule } from '@widgets/title/title.module';


@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    TitleModule
  ],
  exports: [ContactComponent]
})
export class ContactModule { }
