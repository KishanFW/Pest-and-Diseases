import { DiseaseType } from './../englishpages/detect/crop-cropvar/crops/pests-diseases/pests-diseases.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Disease } from '../englishpages/detect/crop-cropvar/crops/pests-diseases/pests-diseases.model';

@Injectable({
  providedIn: 'root'
})
export class DiseasesofcropService {
  apiUrl = 'http://localhost:8000/api';

  constructor(private http:HttpClient) { }

  getDiseases(crop: string): Observable<Disease[]>{
    return this.http.get<Disease[]>(this.apiUrl+'/diseasesofcrop/'+crop);
  }

  getDiseasetypes(): Observable<DiseaseType[]>{
    return this.http.get<DiseaseType[]>(this.apiUrl+'/diseasetypes');
  }
}
