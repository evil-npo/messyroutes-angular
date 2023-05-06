import { Injectable } from '@angular/core';
import { Routes } from '@angular/router';
import { BehaviorSubject, Subject, interval } from 'rxjs';
import { F1ContainerComponent } from './feature1/f1-container/f1-container.component';
import { F2ContainerComponent } from './feature2/f2-container/f2-container.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { Option1Component } from './feature1/option1/option1.component';
import { Option2Component } from './feature1/option2/option2.component';



@Injectable({
  providedIn: 'root'
})
export class NaviService {
  routes: Routes = [
    {
      path: 'f1', component: F1ContainerComponent, children: [
        { path: 'o1', component: Option1Component },
        { path: 'o2', component: Option2Component }
      ]
    },
    { path: 'home', component: F2ContainerComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent }
  ];

  constructor() {
    interval(10000).subscribe(() => {
      this.updateRoute.next();
    });
  }

  routeCreator(): Routes {
    return this.routes;
  }

  updateRoute = new BehaviorSubject<void>(null as any);
}
