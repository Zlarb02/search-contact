import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './modules/main/components/main/main.component';
import { NotFoundComponent } from './core/layout/not-found/not-found.component';
import { DetailComponent } from './modules/main/components/detail/detail.component';
import { CreateComponent } from './modules/main/components/create/create.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'catalog'
  },
  {
    path: 'catalog',
    children: [
      {
        path: '',
        component: MainComponent
      }
    ]
  },
  {
    path: 'detail/:id',
    component: DetailComponent
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
