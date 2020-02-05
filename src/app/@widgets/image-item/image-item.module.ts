import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageItemComponent } from './image-item.component';



@NgModule({
  declarations: [ImageItemComponent],
  imports: [
    CommonModule
  ],
  exports: [ImageItemComponent]
})
export class ImageItemModule { }
