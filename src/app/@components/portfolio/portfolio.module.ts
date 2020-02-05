import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import { TitleModule } from '@widgets/title/title.module';

@NgModule({
  declarations: [PortfolioComponent],
  imports: [
    CommonModule,
    TitleModule
  ],
  exports: [PortfolioComponent]
})
export class PortfolioModule { }
