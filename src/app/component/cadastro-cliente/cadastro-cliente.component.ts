import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';

import { Pessoa } from '../../model/pessoa';
import { PessoaServiceService } from '../../services/pessoa/pessoa.service';

import { UfMunicipioService } from '../../services/uf-municipios/uf-municipio-service';
import { Estado } from '../../model/estado';
import { Municipio } from '../../model/municipio';
import { error, warn } from 'console';

@Component({
  selector: 'app-cadastro-cliente',
  standalone: true,
  imports: [FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './cadastro-cliente.component.html',
  styleUrl: './cadastro-cliente.component.css'
})
export class CadastroClienteComponent {

  id = 0
  nome = ''
  email = ''
  cpf = 0
  data: Date | null = null
  uf = ''
  municipio = ''
  listaUfs : Estado[] = []
  listaMunicipios : Municipio[] = []

  constructor(

    private route: ActivatedRoute,
    private pessoaService: PessoaServiceService,
    private UfMunicipioService: UfMunicipioService

    ) {}

    ngOnInit(){

      this.carregaEstadosSelect() 
    }

  adicionar() { //

    //Cria uma variável constante local chamada pessoa e atribui os valores em seus repectivos campos.
    const pessoa: Pessoa = { 
      id: this.pessoaService.tamanhoArray() + 1,
      nome: this.nome,   
      email: this.email,
      cpf: this.cpf,
      data: this.data,
      uf: this.uf,
      municipio: this.municipio,

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

  
carregaEstadosSelect(){

  this.UfMunicipioService.listaUF()
  .subscribe({
    next:(dadosUf)=>{
      this.listaUfs = [...dadosUf].sort((a, b) => a.nome.localeCompare(b.nome))
    },
    error:(msgErro)=>{
      console.log('Erro ao carregar os Estados', msgErro)
    }
  })

}

carregaMunicipiosSelect(){

  if (!this.uf){
    this.municipio = ''
    this.listaMunicipios = []
    
    return
  }

  this.UfMunicipioService.listaMunicipios(Number(this.uf))
  .subscribe({
    next:(dadosMunicipio) =>{
      this.listaMunicipios = dadosMunicipio
    },
    error:(msgErro)=>{
      console.log('Erro ao carregar os Municípios', msgErro)
    }
  })

}


}