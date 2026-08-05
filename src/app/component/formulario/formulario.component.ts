import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { RouterLink, RouterLinkActive } from '@angular/router'
import { PessoaServiceService } from '../../service/pessoa-service.service'
import { Pessoa } from '../../model/pessoa'

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  id = 0
  nome = ''
  email = ''
  cpf = 0
  data = ''

  constructor(private pessoaService: PessoaServiceService) {}

  salvar() {
    this.pessoaService.adicionar({
      id: this.id,
      nome: this.nome,
      email: this.email,
      cpf: this.cpf,
      data: new Date(this.data) // se Pessoa.data for do tipo Date
    });
  }
}

console.log(Pessoa)