import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "../login/login.component";
import {RegisterComponent} from "../register/register.component";
import {AuthGuard} from "../auth.guard";
import {ListComponent} from "./list/list.component";
import {AddComponent} from "./add/add.component";

const routes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'add', component: AddComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnnonceRoutingModule { }
