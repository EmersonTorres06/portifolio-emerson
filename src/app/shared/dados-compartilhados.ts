import { Injectable, OnInit } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { enUs } from "src/assets/traducao/en";
import { ptBr } from "src/assets/traducao/pt";

@Injectable()
export class DadosCompartilhados {

    lengPreferida: string;
    
    constructor(private cookieService: CookieService) {
        this.setTraducao();
    }
    
    tra = {};
    leng: string = '';
    
    private setTraducao() {
        window.onload = () => {
            this.leng = this.cookieService.get('leng');
            this.tra = !this.leng ? this.padraoSistema : this.texto;
            this.guradarLeng();
        }
    }
    
    public get padraoSistema() {
        this.leng = navigator.language.substr(0, 2);
        return this.texto;
    }

    private get texto() {
        return (this.leng == 'pt' ? ptBr : enUs);
    }

    public setTraducaoEnUS() {
        this.tra = enUs;
        this.leng = 'en';
        this.guradarLeng();
    }

    public setTraducaoPtBR() {
        this.tra = ptBr;
        this.leng = 'pt';
        this.guradarLeng();
    }

    private guradarLeng() {
        this.cookieService.set( 'leng', this.leng );
    }

}