import { Component, OnInit } from '@angular/core';
import { DadosCompartilhados } from 'src/app/shared/dados-compartilhados';

@Component({
  selector: 'app-ems-hamburguer-menu',
  templateUrl: './ems-hamburguer-menu.component.html',
  styleUrls: ['./ems-hamburguer-menu.component.scss']
})
export class EmsHamburguerMenuComponent implements OnInit {

  aberto: boolean = false;

  constructor(public dadosCompartilhados: DadosCompartilhados) { }

  ngOnInit(): void {
  }

  toggleEmsMenu() {
    this.aberto = !this.aberto;
    this.aberto ? this.abrirMenu() : this.fecharMenu();
  }

  abrirMenu() {
    document.getElementById('menu-body').style.width = '100%';
    document.getElementById('options').classList.remove('options');
    document.getElementById('hamburguer-button').classList.add('close');
  }
  
  fecharMenu() {
    document.getElementById('menu-body').style.width = '0%';
    document.getElementById('options').classList.add('options');
    document.getElementById('hamburguer-button').classList.remove('close');
  }

}
