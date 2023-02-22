import { DiseaseSymptom } from './../englishpages/detect/crop-cropvar/crops/pests-diseases/pests-diseases.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DiseasesymptomsService {
  apiUrl = 'http://localhost:8000/api';

  constructor(private http:HttpClient) { }

  getDiseasesymptoms(): Observable<DiseaseSymptom[]>{
    return this.http.get<DiseaseSymptom[]>(this.apiUrl+'/diseasesymptoms');
  }

  getdiseasesymptomsofcrop(crop: string,catagory: string[]): Observable<DiseaseSymptom[]>{
    return this.http.get<DiseaseSymptom[]>(this.apiUrl+'/diseasesymptmsofcrop/'+crop+'/'+catagory);
  }

  getdiseasesymptomsofvariety(variety: string,catagory: string[]): Observable<DiseaseSymptom[]>{
    return this.http.get<DiseaseSymptom[]>(this.apiUrl+'/diseasesymptmsofvariety/'+variety+'/'+catagory);
  }
}
