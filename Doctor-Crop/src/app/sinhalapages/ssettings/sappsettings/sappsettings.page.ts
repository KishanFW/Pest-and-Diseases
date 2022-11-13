import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sappsettings',
  templateUrl: './sappsettings.page.html',
  styleUrls: ['./sappsettings.page.scss'],
})
export class SappsettingsPage implements OnInit {

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
