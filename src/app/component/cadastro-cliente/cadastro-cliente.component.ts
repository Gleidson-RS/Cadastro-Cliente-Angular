import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Pessoa } from '../../model/pessoa';
import { PessoaServiceService } from '../../service/pessoa-service.service';

@Component({
  selector: 'app-cadastro-cliente',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './cadastro-cliente.component.html',
  styleUrl: './cadastro-cliente.component.css'
})
export class CadastroClienteComponent {

  nome = ''
  email = ''
  cpf = 0
  data: Date | null = null
  uf = ''
  municipio = ''

  constructor(private pessoaService: PessoaServiceService) {}

  adicionar() { //

    //Cria uma variável constante local chamada pessoa e atribui os valores em seus repectivos campos.
    const pessoa: Pessoa = { 
      nome: this.nome,   
      email: this.email,
      cpf: this.cpf,
      data: this.data,
      uf: this.uf,
      municipio: this.municipio

    };


      
    this.pessoaService.adicionar(pessoa); //envia o a variavel criada anteriormente para a classe de serviço (pessoaServive).


    //limpa as caixas depois de enviar os dados.
    this.nome = ''
    this.email = ''
    this.cpf = 0
    this.data = null
    this.uf = ''
    this.municipio = ''
  }

}