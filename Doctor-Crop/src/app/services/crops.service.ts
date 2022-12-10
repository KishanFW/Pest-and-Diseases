import { Crop } from './../englishpages/detect/crop-cropvar/crops/crop.model';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class CropsService{
  apiUrl = 'http://localhost:8000/api';

  constructor(private http:HttpClient){}

  getCrops(): Observable<Crop[]>{
    return this.http.get<Crop[]>(this.apiUrl+'/crops');
  }
}
