import { Component, OnInit, ViewChild  } from '@angular/core';

@Component({
  selector: 'app-ssettings',
  templateUrl: './ssettings.page.html',
  styleUrls: ['./ssettings.page.scss'],
})
export class SsettingsPage implements OnInit {

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
