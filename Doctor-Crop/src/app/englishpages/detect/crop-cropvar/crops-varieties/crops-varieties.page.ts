import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-crops-varieties',
  templateUrl: './crops-varieties.page.html',
  styleUrls: ['./crops-varieties.page.scss'],
})
export class CropsVarietiesPage implements OnInit {

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
  routerlink :string ="/detect/crop-cropvar/crops-varieties";

  brinjalselect(){
    this.crop="brinjal";
  }

  govariety(){

    if(this.crop==="brinjal")
      this.routerlink="/detect/crop-cropvar/crops-varieties/brinjal";
  }
}
