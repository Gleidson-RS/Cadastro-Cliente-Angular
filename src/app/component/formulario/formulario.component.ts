import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { Pessoa } from '../../model/pessoa';
import { PessoaServiceService } from '../../services/pessoa/pessoa.service';
import { CommonModule } from '@angular/common';
import { UfMunicipioService } from '../../services/uf-municipios/uf-municipio-service';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})

export class FormularioComponent implements OnInit {

  listaClientes: Pessoa[] = [];

  constructor(

    private route: ActivatedRoute,
    private pessoaService: PessoaServiceService,
    private UfMunicipioService: UfMunicipioService

    ) {} //traz as dependencias do pessoa.ts
  

  ngOnInit(): void { //chama afunção no momento que a pagina é carregada
    this.listaClientes = this.pessoaService.listar(); // Solicita a lista de pessoas pra o pessoaService e manda pra a função listar
  }



  excluir(indice: number) {
    this.pessoaService.excluir(indice)
}



}


