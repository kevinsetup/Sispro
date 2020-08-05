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

    
}