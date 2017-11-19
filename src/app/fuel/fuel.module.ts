import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuelInputComponent } from './fuel-input/fuel-input.component';
import { FuelComponent } from './fuel.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FuelInputComponent, FuelComponent],
  exports: [FuelInputComponent]
})
export class FuelModule { }
