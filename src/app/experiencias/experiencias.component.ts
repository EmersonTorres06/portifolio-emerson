import { Component, OnInit } from '@angular/core';
import { DadosCompartilhados } from '../shared/dados-compartilhados';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.scss']
})
export class ExperienciasComponent implements OnInit {

  constructor(public dadosCompartilhados: DadosCompartilhados) { }

  ngOnInit(): void {
  }

}
