import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { TemplateModule } from './template/template.module';
import { MdbCollapseModule, MdbModule } from 'mdb-angular-ui-kit';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { AppComponent } from './app.component';
import { CorpoSkillsComponent } from './corpo-skills/corpo-skills.component';
import { ArteIlustracaoComponent } from './arte-ilustracao/arte-ilustracao.component';
import { ExperienciasComponent } from './experiencias/experiencias.component';
import { ComponentsModule } from './components/components.module';
import { DadosCompartilhados } from './shared/dados-compartilhados';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    CorpoSkillsComponent,
    ArteIlustracaoComponent,
    ExperienciasComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ComponentsModule,
    TemplateModule,
    MdbModule,
    MdbCollapseModule,
    ScrollToModule.forRoot()
  ],
  providers: [DadosCompartilhados, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
