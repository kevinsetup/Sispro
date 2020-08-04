import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {routing,appRoutingProviders} from './app.routing';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProblematicaBeneficiarioComponent } from './components/problematica-beneficiario/problematica-beneficiario.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProyectosComponent,
    MenuComponent,
    ProblematicaBeneficiarioComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
