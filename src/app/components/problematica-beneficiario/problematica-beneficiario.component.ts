import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { Problematica} from '../../models/problemtica';
import { ProblematicaService} from '../../services/problematica.service';
import {Global} from '../../services/global';

@Component({
  selector: 'app-problematica-beneficiario',
  templateUrl: './problematica-beneficiario.component.html',
  styleUrls: ['./problematica-beneficiario.component.css'],

  providers:[ProblematicaService]
})
export class ProblematicaBeneficiarioComponent implements OnInit {

  public problematicas:Problematica[];


  constructor(
    private _problematicaService:ProblematicaService
  ) { }

  ngOnInit(): void {

    this.getProblematica();

  }
  getProblematica(){
    this._problematicaService.getProblematica().subscribe(
      response => {
        console.log(response);
        if(response){
          this.problematicas = response;
        }
      },
      error =>{
        console.log(<any>error);
      }
    )
  }

}
