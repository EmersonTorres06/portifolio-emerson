import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'ems-modal',
  templateUrl: './ems-modal.component.html',
  styleUrls: ['./ems-modal.component.scss']
})
export class EmsModalComponent implements OnInit, AfterViewInit {
  
  aberto: boolean = false;

  constructor() { }

  ngAfterViewInit(): void {
  }
  
  ngOnInit(): void {
  }
  
  public toggleModal() {
    this.aberto = !this.aberto;
    setTimeout(() => {
      this.backGroundClick();
      this.validaMobile();
    }, 300); 
  }
  
  public backGroundClick() {
    let ref = this;
    if (this.aberto) {
      document.getElementById('ems-background').onclick = function(e) {
        ref.fecharModalMobile();
        if(e.target != document.getElementById('modal-body')) {
          ref.aberto = !ref.aberto;
        }
      }
    }
  }

  validaMobile() {
    if (this.aberto) {
      this.abrirModalMobile();
    } else {
      this.fecharModalMobile();
    }
  }

  private abrirModalMobile() {
    document.getElementById('modal-mobile').style.height = '70%';
  }

  private fecharModalMobile() {
    document.getElementById('modal-mobile').style.height = '0%';
  }
}
