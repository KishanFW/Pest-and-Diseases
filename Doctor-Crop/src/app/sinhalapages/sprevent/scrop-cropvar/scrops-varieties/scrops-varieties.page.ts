import { Component, OnInit, ViewChild  } from '@angular/core';

@Component({
  selector: 'app-scrops-varieties',
  templateUrl: './scrops-varieties.page.html',
  styleUrls: ['./scrops-varieties.page.scss'],
})
export class ScropsVarietiesPage implements OnInit {

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
  routerlink :string ="/sprevent/scrop-cropvar/scrops-varieties";
  brinjalselect(){
    this.crop="brinjal";
  }
  govariety(){
    if(this.crop==="brinjal")
      this.routerlink="/sprevent/scrop-cropvar/scrops-varieties/sbrinjal";
  }

}
