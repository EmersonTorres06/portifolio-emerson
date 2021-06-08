import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmsModalComponent } from './ems-modal/ems-modal.component';
import { EmsHamburguerMenuComponent } from './ems-hamburguer-menu/ems-hamburguer-menu.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';



@NgModule({
  declarations: [
    EmsModalComponent,
    EmsHamburguerMenuComponent
  ],
  imports: [
    CommonModule,
    ScrollToModule.forRoot()
  ],
  exports: [
    EmsModalComponent,
    EmsHamburguerMenuComponent
  ]
})
export class ComponentsModule { }
