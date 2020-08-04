import { Component, OnInit } from '@angular/core';
import { Persona } from '../../models/persona';
import { PersonaService} from '../../services/persona.service';
import { Global } from '../../services/global';
import { Usuario } from '../../models/usuario';
import { NgForm } from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[PersonaService]
})
export class LoginComponent implements OnInit {
  

  constructor(
    private _personaService:PersonaService,
    private router:Router
  ) { 
    

  }
  

  ngOnInit(): void {
    this.getPersona();
  }

  login(form: NgForm ){
    console.log(form.value);

    if(form.value.usuario === 'sanny' && form.value.pass === '123'){
      this.router.navigateByUrl('/menu');
    }
  }
  getPersona(){
    this._personaService.getPersona().subscribe(
      response =>{
        console.log(response);
      },
      error =>{
        console.log(<any>error);
      }
    )
  }

}
