import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MdbModule } from 'mdb-angular-ui-kit';
import { FooterComponent } from './footer/footer.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { EmsNavComponent } from './ems-nav/ems-nav.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    EmsNavComponent
  ],
  imports: [
    CommonModule,
    MdbModule,
    ScrollToModule.forRoot()
  ],
  exports: [
    HeaderComponent, FooterComponent, EmsNavComponent
  ]
})
export class TemplateModule { }
