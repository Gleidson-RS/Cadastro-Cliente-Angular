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

  nome = '';
  email = '';
  cpf = 0;
  data: Date | null = null;

  constructor(private pessoaService: PessoaServiceService) {}

  adicionar() {

    const pessoa: Pessoa = {
      nome: this.nome,
      email: this.email,
      cpf: this.cpf,
      data: this.data
    };

    this.pessoaService.adicionar(pessoa);

    this.nome = '';
    this.email = '';
    this.cpf = 0;
    this.data = null;
  }

}