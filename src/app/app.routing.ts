import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import { LoginComponent } from './components/login/login.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProblematicaBeneficiarioComponent } from './components/problematica-beneficiario/problematica-beneficiario.component';

const appRoutes: Routes = [

    {path:'',component:LoginComponent},
    {path:'proyectos',component:ProyectosComponent},
    {path:'menu',component:MenuComponent},
    {path:'problematica',component:ProblematicaBeneficiarioComponent},
    {path:'**',component:LoginComponent}


];
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes); 
