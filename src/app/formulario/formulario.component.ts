import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { PessoaServiceService } from '../service/pessoa-service.service';


@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule, RouterLink, RouterLinkActive, PessoaServiceService],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  //Pessoa p = new this.Pessoa()

  id = 0
  nome = ''
  email = ''
  cpf = 0
  data = ''

  constructor( private pessoaService: PessoaServiceService ){}

  salvar(){
    this.pessoaService.adicionar({

      id : 0,
      nome : this.nome,
      email : this.email,
      cpf : this.cpf,
      data : this.data

    })
  }

}

