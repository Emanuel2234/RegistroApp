import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioPageRoutingModule } from './inicio-routing.module';

import { InicioPage } from './inicio.page';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';




@NgModule({
  imports: [
      CommonModule
    , FormsModule
    , IonicModule
    , InicioPageRoutingModule
    , MatDatepickerModule
    , MatInputModule
    , MatButtonModule
    , MatFormFieldModule
  ],
  declarations: [InicioPage]
})
export class InicioPageModule {}
