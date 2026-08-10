import { Injectable } from '@angular/core';
import { Pessoa } from '../model/pessoa';

@Injectable({ providedIn: 'root' })

export class PessoaServiceService {
    private pessoas: Pessoa[] = [];

    adicionar(pessoa : Pessoa){
        this.pessoas.push(pessoa)
    }

    listar(): Pessoa[] {
        return this.pessoas
    }

    excluir(indice: number) {
        this.pessoas.splice(indice, 1)
    }

    /*
    editar(pessoa: Pessoa){
        this.pessoas.

    }
*/
}
