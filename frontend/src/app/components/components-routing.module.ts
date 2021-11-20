import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Breadcrumb1Component } from './breadcrumb1/breadcrumb1.component';
import { Breadcrumb2Component } from './breadcrumb2/breadcrumb2.component';
import { ComponentsComponent } from './components.component';
import { DetalleComponent } from './detalle/detalle.component';

const routes: Routes = [
  {
  path: '',
    component: ComponentsComponent,
    children: [
      {
        path: '', component: Breadcrumb1Component,
      },
      {
        path: 'breadcrumb2', component: Breadcrumb2Component,
      },
      {
        path: 'detalle', component: DetalleComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
