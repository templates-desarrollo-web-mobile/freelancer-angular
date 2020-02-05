import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarModule } from './@components/navbar/navbar.module';
import { HeaderModule } from './@components/header/header.module';
import { FooterModule } from './@components/footer/footer.module';
import { PortfolioModule } from './@components/portfolio/portfolio.module';
import { CopyrightModule } from './@components/copyright/copyright.module';
import { ContactModule } from './@components/contact/contact.module';
import { AboutModule } from './@components/about/about.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NavbarModule,
    HeaderModule,
    FooterModule,
    PortfolioModule,
    CopyrightModule,
    ContactModule,
    AboutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
