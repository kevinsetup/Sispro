import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpClientModule } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Persona } from '../models/persona';
import { Global} from './global';


@Injectable()
export class ProyectoService{
    public url:string;

    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url
    }
    getProyect():Observable<any>{
        let headers = new HttpHeaders({'Access-Control-Allow-Origin': '*' }).set('Content-Type','application/json');


        return this._http.get(this.url+'proyectos',{headers:headers});
    }

}