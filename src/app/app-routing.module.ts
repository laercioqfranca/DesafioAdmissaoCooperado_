import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmissaoCooperadoComponent } from './layouts/admissao-cooperado/admissao-cooperado/admissao-cooperado.component';

const routes: Routes = [{
  path: '',
  component: AdmissaoCooperadoComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
