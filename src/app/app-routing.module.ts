import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NaviService } from './navi.service';

@NgModule({
  imports: [RouterModule.forRoot([], {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(router: Router, naviService: NaviService) {
    naviService.updateRoute.subscribe(() => {
      router.config = naviService.routeCreator();
      // router.resetConfig(naviService.routeCreator());
    })
  }
}
