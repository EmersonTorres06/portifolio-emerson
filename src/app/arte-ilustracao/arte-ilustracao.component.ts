import { Component, OnInit } from '@angular/core';
import { DadosCompartilhados } from '../shared/dados-compartilhados';

@Component({
  selector: 'app-arte-ilustracao',
  templateUrl: './arte-ilustracao.component.html',
  styleUrls: ['./arte-ilustracao.component.scss']
})
export class ArteIlustracaoComponent implements OnInit {

  constructor(public dadosCompartilhados: DadosCompartilhados) { }

  ngOnInit(): void {
  }

}
