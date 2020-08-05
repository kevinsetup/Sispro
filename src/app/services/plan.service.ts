import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plan } from '../models/plan';
import {Global } from './global';

@Injectable()
export class PlanService{
    public url:string;

    constructor(
        private _http: HttpClient
    ){  
        this.url = Global.url;

    }
    savePlan(plan:Plan): Observable<any>{
        let params = JSON.stringify(plan);
        let headers = new HttpHeaders().set('Content-Type','application/json');

        return this._http.post(this.url+'add',params,{headers:headers});
    }
    getCarga():Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/json');

        return this._http.get(this.url+'carga',{headers:headers});
    }


}