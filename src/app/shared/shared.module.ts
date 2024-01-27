import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputBoxComponent } from './input-box/input-box.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InputBoxComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    InputBoxComponent
  ]
})
export class SharedModule { }
