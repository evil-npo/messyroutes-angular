import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Option1Component } from "./option1/option1.component";
import { Option2Component } from "./option2/option2.component";
import { F1ContainerComponent } from "./f1-container/f1-container.component";

export const routes: Routes = [
    { path: 'o1', component: Option1Component },
    { path: 'o2', component: Option2Component }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class Feature1RoutingModule { }