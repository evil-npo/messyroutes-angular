import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { Feature1Module } from './feature1/feature1.module';
import { Feature2Module } from './feature2/feature2.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { NaviService } from './navi.service';
import { first, firstValueFrom } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Feature1Module,
    Feature2Module
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: appInit,
    multi: true,
    deps: [NaviService]
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

function appInit(naviService: NaviService) {
  return () => firstValueFrom(naviService.updateRoute);
}