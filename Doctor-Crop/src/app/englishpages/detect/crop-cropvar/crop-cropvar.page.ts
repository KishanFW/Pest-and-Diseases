import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-crop-cropvar',
  templateUrl: './crop-cropvar.page.html',
  styleUrls: ['./crop-cropvar.page.scss'],
})
export class CropCropvarPage implements OnInit {

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
