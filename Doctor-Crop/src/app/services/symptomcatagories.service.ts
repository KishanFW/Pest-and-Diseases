import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { SymptomCatagory } from '../englishpages/detect/crop-cropvar/crops/pests-diseases/pests-diseases.model';

@Injectable({
  providedIn: 'root'
})
export class SymptomcatagoriesService {
  apiUrl = 'http://localhost:8000/api';

  constructor(private http:HttpClient) { }

  getCatagories(): Observable<SymptomCatagory[]>{
    return this.http.get<SymptomCatagory[]>(this.apiUrl+'/symptomcatagories');
  }
}
