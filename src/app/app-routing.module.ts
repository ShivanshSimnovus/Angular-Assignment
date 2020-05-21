import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { TableComponent } from './table/table.component';
import { ForgotpComponent } from './forgotp/forgotp.component';
const routes: Routes = [
  { path: 'login', component: LoginPageComponent},
  { path: 'table', component: TableComponent},
  { path: 'forgotp', component: ForgotpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
