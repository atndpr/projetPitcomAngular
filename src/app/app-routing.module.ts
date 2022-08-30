import {NgModule} from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent,
    canActivate: [AuthGuard]
  },
  //Lazy loading
  { path: 'annonce', loadChildren: () => import('./annonce/annonce.module').then(m => m.AnnonceModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
