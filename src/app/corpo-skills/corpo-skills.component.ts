import { Component, OnInit, ViewChild } from '@angular/core';
import { EmsModalComponent } from '../components/ems-modal/ems-modal.component';
import { DadosCompartilhados } from '../shared/dados-compartilhados';

@Component({
  selector: 'app-corpo-skills',
  templateUrl: './corpo-skills.component.html',
  styleUrls: ['./corpo-skills.component.scss']
})
export class CorpoSkillsComponent implements OnInit {

  @ViewChild(EmsModalComponent) emsModal: EmsModalComponent;

  constructor(public dadosCompartilhados: DadosCompartilhados) { }

  ngOnInit(): void {
  }

}
