import { Routes } from '@angular/router';
import { CadastroClienteComponent } from './component/cadastro-cliente/cadastro-cliente.component';
import { FormularioComponent } from './component/formulario/formulario.component';
import { EditarComponent } from './component/editar/editar.component';

export const routes: Routes = [

  { 
    path: '',
    component: CadastroClienteComponent },

  {
    path: 'formulario',
    component: FormularioComponent },

  {
<<<<<<< HEAD
    path: 'editar/:id',
    component: EditarComponent }



=======
    path: 'editar',
    component: EditarComponent }

>>>>>>> 2b726ef0d023058c8c10c456462af4efa5ed5222
];