import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FuelInputComponent} from './fuel/fuel-input/fuel-input.component';

const appRoutes: Routes = [
  { path: 'input',        component: FuelInputComponent },
  { path: '',   redirectTo: '/input', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
