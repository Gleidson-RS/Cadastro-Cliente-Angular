import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Pessoa } from '../../model/pessoa';
import { PessoaServiceService } from '../../service/pessoa-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent implements OnInit {

  listaClientes: Pessoa[] = [];

  constructor(private pessoaService: PessoaServiceService) {}

  ngOnInit(): void {
    this.listaClientes = this.pessoaService.listar();
  }

}