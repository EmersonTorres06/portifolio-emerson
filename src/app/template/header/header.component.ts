import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { DadosCompartilhados } from 'src/app/shared/dados-compartilhados';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public euDesenho: SafeStyle;
  public fotoReal: SafeStyle;
  public desenho: boolean = true;

  constructor(public dadosCompartilhados: DadosCompartilhados, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.euDesenho = this.sanitizer.bypassSecurityTrustStyle("url('../../../assets/images/emerson_header.png')");
    this.fotoReal = this.sanitizer.bypassSecurityTrustStyle("url('../../../assets/images/foto-real.jpg')");
  }


}
