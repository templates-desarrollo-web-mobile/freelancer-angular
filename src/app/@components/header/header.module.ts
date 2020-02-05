import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { TitleModule } from '@widgets/title/title.module';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    TitleModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
