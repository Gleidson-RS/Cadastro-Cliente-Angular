import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Pessoa } from '../../model/pessoa';
import { PessoaServiceService } from '../../service/pessoa-service.service';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent implements OnInit {

  id = 0;

  nome = '';
  email = '';
  cpf = 0;
  data: Date | null = null;
  uf = '';
  municipio = '';

  constructor(
    private pessoaService: PessoaServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.id = Number(this.route.snapshot.paramMap.get('id'));

    const pessoa = this.pessoaService.buscarPorId(this.id);

    if (pessoa) {
      this.nome = pessoa.nome ?? '';
      this.email = pessoa.email ?? '';
      this.cpf = pessoa.cpf ?? 0;
      this.data = pessoa.data ?? null;
      this.uf = pessoa.uf ?? '';
      this.municipio = pessoa.municipio ?? '';
    }

  }

  salvar() {

    const pessoa: Pessoa = {

      id: this.id,
      nome: this.nome,
      email: this.email,
      cpf: this.cpf,
      data: this.data,
      uf: this.uf,
      municipio: this.municipio

    };

    this.pessoaService.atualizar(pessoa);

    this.router.navigate(['/formulario']);

  }

}