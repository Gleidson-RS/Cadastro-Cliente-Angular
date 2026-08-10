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

<<<<<<< HEAD
    excluir(indice: number) {
        this.pessoas.splice(indice, 1)
    }

    /*
    editar(pessoa: Pessoa){
        this.pessoas.

    }
*/
=======


>>>>>>> 2b726ef0d023058c8c10c456462af4efa5ed5222
}
