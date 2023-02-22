import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { PestSymptom } from '../englishpages/detect/crop-cropvar/crops/pests-diseases/pests-diseases.model';

@Injectable({
  providedIn: 'root'
})
export class SymptomsofpestService {
  apiUrl = 'http://localhost:8000/api';

  constructor(private http:HttpClient) { }

  getpestsymptoms(): Observable<PestSymptom[]>{
    return this.http.get<PestSymptom[]>(this.apiUrl+'/pestsymptoms');
  }

  getpestsymptomsofcrop(crop: string,catagory: string[]): Observable<PestSymptom[]>{
    return this.http.get<PestSymptom[]>(this.apiUrl+'/pestsymptmsofcrop/'+crop+'/'+catagory);
  }

  getpestsymptomsofvariety(variety: string,catagory: string[]): Observable<PestSymptom[]>{
    return this.http.get<PestSymptom[]>(this.apiUrl+'/pestsymptmsofvariety/'+variety+'/'+catagory);
  }
}
