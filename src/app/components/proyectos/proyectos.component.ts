import { Component, OnInit } from '@angular/core';

import {Proyectos} from '../../models/proyectos';
import {ProyectoService} from '../../services/proyecto.service';
import {Global} from '../../services/global';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
  providers:[ProyectoService]
})
export class ProyectosComponent implements OnInit {
  public proyectos: Proyectos[];


  constructor(
    private _proyectoService:ProyectoService
  )
   { }

  ngOnInit(): void {
    this.getProyect();
  }
  getProyect(){
    this._proyectoService.getProyect().subscribe(
      response =>{
        console.log(response);
        if(response){
          this.proyectos = response;
        }
      },
      error =>{
        console.log(<any>error)
      }
    )
  }

}
