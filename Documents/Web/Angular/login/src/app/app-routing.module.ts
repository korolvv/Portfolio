import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { homeComponent } from './home/home.component';
import { homeenComponent } from './home-en/home-en.component';

const routes: Routes = [
  { path: 'home', component: homeComponent },
  { path: 'home-en', component: homeenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
