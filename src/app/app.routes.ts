import { Routes } from '@angular/router';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { FormularioComponent } from './cadastro-cliente/paginas/formulario/formulario.component';
import { EditarComponent } from './cadastro-cliente/paginas/editar/editar.component';

export const routes: Routes = [

  { 
    path: '',
    component: CadastroClienteComponent },

  {
    path: 'formulario',
    component: FormularioComponent },

  {
    path: 'editar',
    component: EditarComponent }

];