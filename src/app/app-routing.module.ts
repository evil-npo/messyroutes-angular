import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NaviService } from './navi.service';

@NgModule({
  imports: [RouterModule.forRoot([])],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(router: Router, naviService: NaviService) {
    naviService.updateRoute.subscribe(() => {
      router.resetConfig(naviService.routeCreator());
    })
  }
}
