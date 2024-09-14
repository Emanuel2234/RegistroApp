import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

//EFM: esto es necesario para las animaciones y para usar el calendario de angular material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { LOCALE_ID } from '@angular/core';
import { MatNativeDateModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent],
  imports: [
      BrowserModule
      //se agregará "innerHTMLTemplatesEnabled: true" para poder usar ventanas emergentes con html y css 
    , IonicModule.forRoot({innerHTMLTemplatesEnabled: true}) //con esto se pueden usar ventanas emergentes (html y ccs)
    , AppRoutingModule
    , BrowserAnimationsModule
    , MatDatepickerModule
    , MatNativeDateModule
    , MatInputModule
    , MatButtonModule
    , MatCardModule
    , MatFormFieldModule
    , MatCheckboxModule
    , MatRadioModule
    , MatSelectModule

  ],
  providers: [
    { 
      provide: RouteReuseStrategy, 
      useClass: IonicRouteStrategy 
    }
    , provideAnimationsAsync()
    // para usar el calendario de angular material debo agregar el soporte de idioma español 
    , {
      provide : LOCALE_ID,
      useValue:'es-CL'
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
