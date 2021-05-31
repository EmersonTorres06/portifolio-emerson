import { Injectable } from "@angular/core";
import { enUs } from "src/assets/traducao/en";
import { ptBr } from "src/assets/traducao/pt";

@Injectable()
export class DadosCompartilhados {
    
    constructor() {
        this.setTraducao();
    }

    tra = {};
    leng: string = '';

    private setTraducao() {
        this.leng = navigator.language.substr(0, 2);
        this.tra = (this.leng == 'pt' ? ptBr : enUs);
    }

    public setTraducaoEnUS() {
        this.tra = enUs;
        this.leng = 'en'
    }

    public setTraducaoPtBR() {
        this.tra = ptBr;
        this.leng = 'pt'
    }

}