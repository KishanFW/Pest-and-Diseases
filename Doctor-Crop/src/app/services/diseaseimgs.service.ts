import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { DiseaseImg } from '../englishpages/detect/crop-cropvar/crops/pests-diseases/pests-diseases.model';

@Injectable({
  providedIn: 'root'
})
export class DiseaseimgsService {
  apiUrl = 'http://localhost:8000/api';

  constructor(private http:HttpClient) { }

  getDiseaseimgs(): Observable<DiseaseImg[]>{
    return this.http.get<DiseaseImg[]>(this.apiUrl+'/diseaseimgs');
  }
}
