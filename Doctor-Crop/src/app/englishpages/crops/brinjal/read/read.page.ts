import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-read',
  templateUrl: './read.page.html',
  styleUrls: ['./read.page.scss'],
})
export class ReadPage implements OnInit {

  ishidden: boolean = true;
  updownicon: String = "caret-down-outline"

  constructor() { }

  ngOnInit() {
  }
  slidedown(){

    if(this.ishidden === true){

      this.ishidden = false;
      this.updownicon = "caret-up-outline"

    }else if(this.ishidden === false){

      this.ishidden = true;
      this.updownicon = "caret-down-outline"

    }

  }

  @ViewChild('popover') popover;

  isOpen = false;

  private presentPopover(e: Event) {
    this.popover.event = e;
    this.isOpen = true;
  }
}
