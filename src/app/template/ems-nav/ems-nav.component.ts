import { Component, OnInit } from '@angular/core';
import { DadosCompartilhados } from 'src/app/shared/dados-compartilhados';

@Component({
  selector: 'ems-nav',
  templateUrl: './ems-nav.component.html',
  styleUrls: ['./ems-nav.component.scss']
})
export class EmsNavComponent implements OnInit {

  constructor(public dadosCompartilhados: DadosCompartilhados) { }

  ngOnInit(): void {
    window.onscroll = () => {

      let nav = document.getElementById('nav-ems') as HTMLElement;
      let navSkills = document.getElementById('nav-skills') as HTMLElement;
      let navExperiencias = document.getElementById('nav-experiencias') as HTMLElement;

      this.pagePosition >= 100 ? nav.classList.add('fixed') : nav.classList.remove('fixed');
      this.pagePosition > 456 && this.pagePosition < 2268 ? navSkills.classList.add('active') : navSkills.classList.remove('active');
      this.pagePosition > 2268 && this.pagePosition < 3168 ? navExperiencias.classList.add('active') : navExperiencias.classList.remove('active');

    }
  }

  get pagePosition() {
    return window.scrollY || document.getElementsByTagName("html")[0].scrollTop;
  }

}
