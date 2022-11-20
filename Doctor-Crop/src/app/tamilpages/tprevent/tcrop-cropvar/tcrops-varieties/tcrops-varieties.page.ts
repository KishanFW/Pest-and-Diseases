import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tcrops-varieties',
  templateUrl: './tcrops-varieties.page.html',
  styleUrls: ['./tcrops-varieties.page.scss'],
})
export class TcropsVarietiesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ViewChild('popover') popover;

  isOpen = false;

  private presentPopover(e: Event) {
    this.popover.event = e;
    this.isOpen = true;
  }
  crop:string = null;
routerlink :string ="/tprevent/tcrop-cropvar/tcrops-varieties";
brinjalselect(){
  this.crop="brinjal";
}
govariety(){
  if(this.crop==="brinjal")
    this.routerlink="/tprevent/tcrop-cropvar/tcrops-varieties/tbrinjal";
}
}
