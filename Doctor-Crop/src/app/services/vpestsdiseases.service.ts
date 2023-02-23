import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Pest, Disease, DiseaseType } from "../englishpages/detect/crop-cropvar/crops/pests-diseases/pests-diseases.model";

@Injectable({
  providedIn: 'root'
})
export class VpestsdiseasesService {
  apiUrl = 'http://localhost:8000/api';

  constructor(private http:HttpClient) { }

  getpestsofvariety(variety: string): Observable<Pest[]>{
    return this.http.get<Pest[]>(this.apiUrl+'/pestsofvariety/'+variety);
  }

  getdiseasesofvariety(variety: string): Observable<Disease[]>{
    return this.http.get<Disease[]>(this.apiUrl+'/diseasesofvariety/'+variety);
  }

  getDiseasetypes(): Observable<DiseaseType[]>{
    return this.http.get<DiseaseType[]>(this.apiUrl+'/diseasetypes');
  }
}
