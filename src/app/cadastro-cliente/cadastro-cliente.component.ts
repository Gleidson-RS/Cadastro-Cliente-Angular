import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Pessoa } from "../model/pessoa"


@Component({
  selector: 'app-cadastro-cliente',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './cadastro-cliente.component.html',
  styleUrl: './cadastro-cliente.component.css'
})
export class CadastroClienteComponent {

  nome: string = ''
  email: string = ''
  cpf: number = 0
  data: Date | null = null
  uf: string = ''
  municipio: string = ''

  listaCliente : Pessoa [] = []


}