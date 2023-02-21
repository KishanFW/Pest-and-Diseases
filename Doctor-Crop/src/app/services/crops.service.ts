import { Crop } from './../englishpages/detect/crop-cropvar/crops/crop.model';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})

export class CropsService{
  apiUrl = 'http://localhost:8000/api';
  language: string = this.translateService.currentLang;

  constructor(private http:HttpClient,private translateService: TranslateService){}

  getCrops(): Observable<Crop[]>{
    console.log("test")
    console.log(this.language)
    return this.http.get<Crop[]>(this.apiUrl+'/'+this.language+'/crops');

  }
}
