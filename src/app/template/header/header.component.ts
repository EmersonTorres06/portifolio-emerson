import { Component, OnInit } from '@angular/core';
import { DadosCompartilhados } from 'src/app/shared/dados-compartilhados';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public dadosCompartilhados: DadosCompartilhados) { }

  ngOnInit(): void { }

}
