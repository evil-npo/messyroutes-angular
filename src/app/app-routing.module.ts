import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { F1ContainerComponent } from './feature1/f1-container/f1-container.component';
import { routes as f1routes } from './feature1/feature1.routing'
import { F2ContainerComponent } from './feature2/f2-container/f2-container.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: 'f1', component: F1ContainerComponent, children: f1routes},
  {path: 'home', component: F2ContainerComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(router: Router) {
    router.resetConfig(routes);
  }
}
