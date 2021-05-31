import { Component, OnInit } from '@angular/core';
import { DadosCompartilhados } from 'src/app/shared/dados-compartilhados';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public dadosCompartilhados: DadosCompartilhados) { }

  ngOnInit(): void {
  }

}
