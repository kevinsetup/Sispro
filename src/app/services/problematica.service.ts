import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Problematica } from '../models/problemtica';
import { Global} from './global';

@Injectable()
export class ProblematicaService{
    public url:string;
    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url;

    }
    getProblematica(): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/json');

        return this._http.get(this.url+'problematica',{headers:headers});
    }

}