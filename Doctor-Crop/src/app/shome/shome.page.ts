import { Component, OnInit, ViewChild } from '@angular/core';



@Component({
  selector: 'app-shome',
  templateUrl: './shome.page.html',
  styleUrls: ['./shome.page.scss'],
})

export class ShomePage{

  constructor() { }


  
  @ViewChild('popover') popover;

  isOpen = false;

  private presentPopover(e: Event) {
    this.popover.event = e;
    this.isOpen = true;
  }
  

}
