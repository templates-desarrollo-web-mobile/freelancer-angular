import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import { TitleModule } from '@widgets/title/title.module';
import { ImageItemModule } from '@widgets/image-item/image-item.module';

@NgModule({
  declarations: [PortfolioComponent],
  imports: [
    CommonModule,
    TitleModule,
    ImageItemModule
  ],
  exports: [PortfolioComponent]
})
export class PortfolioModule { }
