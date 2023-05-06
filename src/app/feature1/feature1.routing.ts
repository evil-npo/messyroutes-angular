import { Routes } from "@angular/router";
import { Option1Component } from "./option1/option1.component";
import { Option2Component } from "./option2/option2.component";

export const routes: Routes = [
    { path: 'o1', component: Option1Component },
    { path: 'o2', component: Option2Component }
]