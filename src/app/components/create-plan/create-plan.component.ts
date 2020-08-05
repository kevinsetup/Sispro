import { Component, OnInit } from '@angular/core';
import {Plan} from '../../models/plan';
import {PlanService} from '../../services/plan.service'

@Component({
  selector: 'app-create-plan',
  templateUrl: './create-plan.component.html',
  styleUrls: ['./create-plan.component.css'],
  providers: [PlanService]
})
export class CreatePlanComponent implements OnInit {
  public plan: Plan;

  constructor(
    private _plantService:PlanService
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

  }
  onSubmit(form){
    console.log(this.plan)
  }

}
