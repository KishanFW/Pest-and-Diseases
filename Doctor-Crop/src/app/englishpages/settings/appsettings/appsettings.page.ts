import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-appsettings',
  templateUrl: './appsettings.page.html',
  styleUrls: ['./appsettings.page.scss'],
})
export class AppsettingsPage implements OnInit {

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
