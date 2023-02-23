import { Crop } from './../englishpages/detect/crop-cropvar/crops/crop.model';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TranslateService } from '@ngx-translate/core'; //1


@Injectable({
  providedIn: 'root'
})

export class CropsService{
  apiUrl = 'http://localhost:8000/api';
  language: string = this.translateService.currentLang; //2

  constructor(private http:HttpClient,private translateService: TranslateService){
    this.translateService.onLangChange.subscribe(()=>{
      this.language=this.translateService.currentLang
    })
  } //3



  getCrops(): Observable<Crop[]>{
    return this.http.get<Crop[]>(this.apiUrl+'/'+this.language+'/crops'); //4

  }
}
