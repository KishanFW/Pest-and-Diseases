import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tsettings',
  templateUrl: './tsettings.page.html',
  styleUrls: ['./tsettings.page.scss'],
})
export class TsettingsPage implements OnInit {

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

