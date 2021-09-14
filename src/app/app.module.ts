import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ATComponentsModule } from 'at-digital-components';

import { StorageServiceModule } from 'ngx-webstorage-service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardProfileComponent } from './card-profile/card-profile.component';
import { CvComponent } from './cv/cv.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { CvEditComponent } from './cv-edit/cv-edit.component';
import { AbilitiesEditComponent } from './abilities-edit/abilities-edit.component';
import { SoftwareEditComponent } from './software-edit/software-edit.component';
import { ExperienceEditComponent } from './experience-edit/experience-edit.component';
import { SchoolarshipEditComponent } from './schoolarship-edit/schoolarship-edit.component';
import { MenuComponent } from './menu/menu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    CardProfileComponent,
    CvComponent,
    ProfileEditComponent,
    CvEditComponent,
    AbilitiesEditComponent,
    SoftwareEditComponent,
    ExperienceEditComponent,
    SchoolarshipEditComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    // registra proveedores críticos de servicios de aplicaciones. También incluye directivas comunes como NgIf y NgFor que se vuelven visibles y utilizables de inmediato en cualquiera de las plantillas de componentes de este módulo.
    AppRoutingModule,
    // enrutador que coincida con la ruta de redireccionamiento cuando la URL restante comienza con la ruta del prefijo de la ruta de redireccionamiento.
    ReactiveFormsModule,
    // es para formularios controlados por modelos. Cada formulario tiene un estado que se puede actualizar mediante muchas interacciones diferentes y depende del desarrollador de la aplicación administrar ese estado y evitar que se corrompa
    ATComponentsModule,
    // libreria de componentes AT
    StorageServiceModule
    // Modulo que permite almacenar datos en modo de sesion
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
