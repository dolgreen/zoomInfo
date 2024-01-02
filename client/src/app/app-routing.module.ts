import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeHeadComponent } from './home/home-head/home-head.component';
import { UsersTableComponent } from './users/users-table/users-table.component';
import { AboutPageComponent } from './about/about-page/about-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeHeadComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'admin', component: UsersTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
