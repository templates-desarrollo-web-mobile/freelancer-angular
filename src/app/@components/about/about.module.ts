import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { TitleModule } from '@widgets/title/title.module';

@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    TitleModule
  ],
  exports: [AboutComponent]
})
export class AboutModule { }
