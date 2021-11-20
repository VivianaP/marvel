import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsRoutingModule } from './components-routing.module';
import { Breadcrumb1Component } from './breadcrumb1/breadcrumb1.component';
import { RouterModule } from '@angular/router';
import { ComponentsComponent } from './components.component';
import { MaterialModule } from '../material/material.module';
import { DetalleComponent } from './detalle/detalle.component';
import { Breadcrumb2Component } from './breadcrumb2/breadcrumb2.component';


@NgModule({
  declarations: [
    Breadcrumb1Component,
    ComponentsComponent,
    DetalleComponent,
    Breadcrumb2Component
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    RouterModule,
    MaterialModule,
  ]
})
export class ComponentsModule { }
