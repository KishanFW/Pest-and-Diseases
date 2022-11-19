import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-spest',
  templateUrl: './spest.page.html',
  styleUrls: ['./spest.page.scss'],
})
export class SpestPage implements OnInit {

  ishidden1: boolean = true;
  ishidden2: boolean = true;
  ishidden3: boolean = true;
  ishidden4: boolean = true;
  updownicon1: String = "caret-down-outline"
  updownicon2: String = "caret-down-outline"
  updownicon3: String = "caret-down-outline"
  updownicon4: String = "caret-down-outline"

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
  
  @ViewChild('popover') popover;
  isOpen = false;

  private presentPopover(e: Event) {
    this.popover.event = e;
    this.isOpen = true;
  }
}
