import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VaiablesService {

  public pestsordiseases: string;
  public symptomslist: any[] = [];
  public pestordisease: string;

  constructor() { }

  changeData(pestsordiseases: string,symptomslist: any[]){

    this.pestsordiseases = pestsordiseases;
    this.symptomslist = symptomslist;
   }

   setpestdisease(value: string){
    if(value == 'pests'){
      this.pestordisease = value;
    }else if(value == 'diseases'){
      this.pestordisease = value;
    }
   }
}
