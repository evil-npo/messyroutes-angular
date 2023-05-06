import { Injectable } from '@angular/core';
import { Routes } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { F1ContainerComponent } from './feature1/f1-container/f1-container.component';
import { F2ContainerComponent } from './feature2/f2-container/f2-container.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { routes as f1routes } from './feature1/feature1.routing';



@Injectable({
  providedIn: 'root'
})
export class NaviService {
  routes: Routes = [
    {path: 'f1', component: F1ContainerComponent, children: f1routes},
    {path: 'home', component: F2ContainerComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '**', component: NotFoundComponent}
  ];

  constructor() { }

  routeCreator(): Routes {
    return this.routes;
  }

  updateRoute = new BehaviorSubject<void>(null as any);
}
