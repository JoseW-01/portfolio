import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './render/joke/home.component';
import { ResumenComponent } from './resumen/resumen/resumen.component';
import { CrudComponent } from './render/crud/crud/crud.component';
import { CreateComponent } from './render/crud/Product/create/create/create.component';
import { NotFoundComponent } from './render/crud/Product/not found/not-found/not-found.component';
import { ProductComponent } from './render/crud/Product/product.component';
import { UpdateComponent } from './render/crud/Product/update/update/update.component';

const routes: Routes = [
  { path: '', component: ResumenComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'crud',
    component: CrudComponent,
    children: [
      {
        path:'',
        redirectTo: 'list',
        pathMatch:'full'
      },
      {
        path: 'list', 
        component: ProductComponent 
      },
      {
        path: 'create', component: CreateComponent
      },
      {
        path: 'update/:id', component: UpdateComponent
      }
    ]
  },

  // cuando en la ruta indique product, lleve al componente not found
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
