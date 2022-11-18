import { Component, OnInit, ViewChild  } from '@angular/core';

@Component({
  selector: 'app-scrop-cropvar',
  templateUrl: './scrop-cropvar.page.html',
  styleUrls: ['./scrop-cropvar.page.scss'],
})
export class ScropCropvarPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ViewChild('popover') popover;

  isOpen = false;

  private presentPopover(e: Event) {
    this.popover.event = e;
    this.isOpen = true;
  }
}
