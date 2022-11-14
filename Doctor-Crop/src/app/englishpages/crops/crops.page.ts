import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-crops',
  templateUrl: './crops.page.html',
  styleUrls: ['./crops.page.scss'],
})
export class CropsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ViewChild('popover') popover;

  isOpen = false;

  private presentPopover(e: Event) {
    this.popover.event = e;
    this.isOpen = true;
  }

  variety: String = null;
  routerlink: String ="/crops";

  brinjalselect(){
      this.variety = "brinjal";
  }

  govariety(){

      if(this.variety==="brinjal")
        this.routerlink = "/crops/brinjal";
  }

}

