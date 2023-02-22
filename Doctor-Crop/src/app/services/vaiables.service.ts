import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VaiablesService {

  public pestsordiseases: string;
  public symptomslist: any[] = [];

  constructor() { }

  changeData(pestsordiseases: string,symptomslist: any[]){

    this.pestsordiseases = pestsordiseases;
    this.symptomslist = symptomslist;
  }
}
