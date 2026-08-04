import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cliente } from './Clientes';
import { RouterLink } from '@angular/router';


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

  listaCliente : Cliente [] = []


  addCliente(){
 
    //INSTANCIANDO A CLASS ITEM
  
    let item = new Cliente() 

    item.nome = this.nome
    item.email = this.email
    item.cpf = this.cpf
    item.data = this.data
    item.uf = this.uf
    item.municipio = this.municipio
    
    this.listaCliente.push(item)
    
    this.nome = ''

    console.log(item)
    console.log(Cliente)
  }
  
  
  limparTudo(){
    this.listaCliente = []
  }

}
