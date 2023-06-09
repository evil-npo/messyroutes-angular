import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Option1Component } from './option1/option1.component';
import { Option2Component } from './option2/option2.component';
import { Option3Component } from './option3/option3.component';
import { F1ContainerComponent } from './f1-container/f1-container.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    Option1Component,
    Option2Component,
    Option3Component,
    F1ContainerComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class Feature1Module { }
