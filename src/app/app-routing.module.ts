import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngridientsComponent } from './ingridients/ingridients.component';
import { RecepiesComponent } from './recepies/recepies.component';

const routes: Routes = [
  {path: 'recepies', component: RecepiesComponent},
  {path: 'ingridients', component: IngridientsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  static routeTableComponents = [
    RecepiesComponent,
    IngridientsComponent
  ]
 }
