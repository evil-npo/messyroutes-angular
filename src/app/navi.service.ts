import { Injectable } from '@angular/core';
import { Routes } from '@angular/router';
import { Subject, timer } from 'rxjs';
import { F1ContainerComponent } from './feature1/f1-container/f1-container.component';
import { F2ContainerComponent } from './feature2/f2-container/f2-container.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { Option1Component } from './feature1/option1/option1.component';
import { Option2Component } from './feature1/option2/option2.component';
import { Option3Component } from './feature1/option3/option3.component';



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
    timer(500).subscribe(() => this.updateRoute.next());
    // timer(5_000).subscribe(() => {
    //   this.routes[0].children?.push(
    //     { path: 'o3', component: Option3Component }
    //   );
    //   this.updateRoute.next();
    // });
  }

  routeCreator(): Routes {
    return this.routes;
  }

  updateRoute = new Subject<void>();
}
