import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComandosComponent } from './components/comandos/comandos.component';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  {path: 'inicio', component : InicioComponent},
  {path: 'comandos',component : ComandosComponent},
  {path : '**', redirectTo: 'inicio',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
