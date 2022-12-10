import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-diseases',
  templateUrl: './diseases.page.html',
  styleUrls: ['./diseases.page.scss'],
})
export class DiseasesPage implements OnInit {

  ishidden1: boolean = true;
  ishidden2: boolean = true;
  ishidden3: boolean = true;
  ishidden4: boolean = true;
  ishidden5: boolean = true;
  ishidden6: boolean = true;
  ishidden7: boolean = true;
  ishidden8: boolean = true;

  updownicon1: String = "caret-down-outline"
  updownicon2: String = "caret-down-outline"
  updownicon3: String = "caret-down-outline"
  updownicon4: String = "caret-down-outline"
  updownicon5: String = "caret-down-outline"
  updownicon6: String = "caret-down-outline"
  updownicon7: String = "caret-down-outline"
  updownicon8: String = "caret-down-outline"

  constructor() { }

  ngOnInit() {
  }

  slidedown1(){

    if(this.ishidden1 === true){
      this.ishidden1 = false;
      this.updownicon1 = "caret-up-outline"
    }else if(this.ishidden1 === false){

      this.ishidden1 = true;
      this.updownicon1 = "caret-down-outline"
    }
  }

  slidedown2(){

    if(this.ishidden2 === true){
      this.ishidden2 = false;
      this.updownicon2 = "caret-up-outline"
    }else if(this.ishidden2 === false){

      this.ishidden2 = true;
      this.updownicon2 = "caret-down-outline"
    }
  }

  slidedown3(){

    if(this.ishidden3 === true){
      this.ishidden3 = false;
      this.updownicon3 = "caret-up-outline"
    }else if(this.ishidden3 === false){

      this.ishidden3 = true;
      this.updownicon3 = "caret-down-outline"
    }
  }

  slidedown4(){

    if(this.ishidden4 === true){
      this.ishidden4 = false;
      this.updownicon4 = "caret-up-outline"
    }else if(this.ishidden4 === false){

      this.ishidden4 = true;
      this.updownicon4 = "caret-down-outline"
    }
  }


  slidedown5(){

    if(this.ishidden5 === true){
      this.ishidden5= false;
      this.updownicon5 = "caret-up-outline"
    }else if(this.ishidden5 === false){

      this.ishidden5 = true;
      this.updownicon5 = "caret-down-outline"
    }
  }

  slidedown6(){

    if(this.ishidden6 === true){
      this.ishidden6 = false;
      this.updownicon6 = "caret-up-outline"
    }else if(this.ishidden6 === false){

      this.ishidden6 = true;
      this.updownicon6 = "caret-down-outline"
    }
  }


  slidedown7(){

    if(this.ishidden7 === true){
      this.ishidden7 = false;
      this.updownicon7 = "caret-up-outline"
    }else if(this.ishidden7 === false){

      this.ishidden7 = true;
      this.updownicon7 = "caret-down-outline"
    }
  }

  slidedown8(){

    if(this.ishidden8 === true){
      this.ishidden8 = false;
      this.updownicon8 = "caret-up-outline"
    }else if(this.ishidden8 === false){

      this.ishidden8 = true;
      this.updownicon8 = "caret-down-outline"
    }
  }

  @ViewChild('popover') popover;

  isOpen = false;

  presentPopover(e: Event) {
    this.popover.event = e;
    this.isOpen = true;
  }
}
