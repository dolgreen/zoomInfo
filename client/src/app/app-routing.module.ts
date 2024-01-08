import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeHeadComponent } from './components/home/home-head/home-head.component';
import { UsersTableComponent } from './components/users/users-table/users-table.component';
import { AboutPageComponent } from './components/about/about-page/about-page.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeHeadComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'admin', component: UsersTableComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
