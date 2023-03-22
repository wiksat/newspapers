import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaDrugaComponent } from './components/lista-druga/lista-druga.component';
import { ListaPierwszaComponent } from './components/lista-pierwsza/lista-pierwsza.component';
import { ListaTrzeciaComponent } from './components/lista-trzecia/lista-trzecia.component';
const routes: Routes = [
  {
    path: '', redirectTo: '/czasopismo', pathMatch: 'full'
  },
  {
    path: "czasopismo",
    component: ListaPierwszaComponent
  },
  {
    path: "czasopismo/:name",
    component: ListaDrugaComponent
  },
  {
    path: "czasopismo/:name/:year",
    component: ListaTrzeciaComponent,
  },
  {
    path: "**",
    redirectTo: "/czasopismo",
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
