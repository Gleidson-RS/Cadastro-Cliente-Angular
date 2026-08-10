import { Injectable } from '@angular/core'
import { Pessoa } from '../model/pessoa'

@Injectable({
  providedIn: 'root'
})
export class PessoaServiceService {

  private pessoas: Pessoa[] = []

  adicionar(pessoa: Pessoa) {
    this.pessoas.push(pessoa)
  }

  listar(): Pessoa[] {
    return this.pessoas
  }

  excluir(indice: number) {
    this.pessoas.splice(indice, 1)
  }

  tamanhoArray() {
    return this.pessoas.length
  }

  buscarPorId(id: number): Pessoa | undefined {
    return this.pessoas.find(p => p.id === id)
  }

  atualizar(pessoa: Pessoa) {
    const indice = this.pessoas.findIndex(p => p.id === pessoa.id)

    if (indice !== -1) {
      this.pessoas[indice] = pessoa
    }
  }

}