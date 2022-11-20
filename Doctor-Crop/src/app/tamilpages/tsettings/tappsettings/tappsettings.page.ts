import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tappsettings',
  templateUrl: './tappsettings.page.html',
  styleUrls: ['./tappsettings.page.scss'],
})
export class TappsettingsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ViewChild('popover') popover;

  isOpen = false;
  isOpen2 = false;

  private presentPopover(e: Event) {
    this.popover.event = e;
    this.isOpen = true;
  }

  private presentPopover2(e: Event) {
    this.popover.event = e;
    this.isOpen2 = true;
  }
}
