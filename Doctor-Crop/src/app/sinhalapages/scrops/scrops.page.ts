import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-scrops',
  templateUrl: './scrops.page.html',
  styleUrls: ['./scrops.page.scss'],
})
export class ScropsPage implements OnInit {

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
  routerlink: String ="/scrops";

  brinjalselect(){
      this.variety = "brinjal";
  }

  govariety(){

      if(this.variety==="brinjal")
        this.routerlink = "/scrops/sbrinjal";
  }
}
