import { Component, OnInit } from '@angular/core';
import {Plan} from '../../models/plan';
import {PlanService} from '../../services/plan.service';
import {Carga} from '../../models/carga';
import {ProblematicaService} from '../../services/problematica.service';
import {Problematica} from '../../models/problemtica';

import {Global} from '../../services/global';

@Component({
  selector: 'app-create-plan',
  templateUrl: './create-plan.component.html',
  styleUrls: ['./create-plan.component.css'],
  providers: [PlanService,ProblematicaService]
})
export class CreatePlanComponent implements OnInit {
  public opcion:number;
  public verseleccion:number;

  public problematicas:Problematica[];
  public plan: Plan;
  public cargas:Carga[];

  constructor(
    private _plantService:PlanService,
    private _problematicaService:ProblematicaService
  ) { 
    this.plan = new Plan(null,null,null,'',null);
    /*
        public plan_proyecto_id:number,
        public info_comunidad_id:number,
        public carga_id:number,
        public nombre:string,
        public presupuesto:number
    */ 
  }

  ngOnInit(): void {
    this.getCarga();
    this.getProblematica();

  }
  onSubmit(form){
    console.log(this.plan);
    this._plantService.savePlan(this.plan).subscribe(
      response =>{
        console.log(response);
      },
      error =>{
        console.log(<any>error);
      }

    );
  }
  getCarga(){
    this._plantService.getCarga().subscribe(
      response => {
        console.log(response);
        if(response){
          this.cargas = response;
        }
      },
      error =>{
        console.log(<any>error)
      }

    )

  }
  getProblematica(){
    this._problematicaService.getProblematica().subscribe(
      response =>{
        console.log(response);
        if(response){
          this.problematicas = response;
        }
      },
      error=>{
        console.log(<any>error);

      }
    )
  }
  capturar(){
    this.verseleccion = this.opcion

  }


}
