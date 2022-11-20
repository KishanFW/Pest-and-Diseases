import { Component, OnInit, ViewChild  } from '@angular/core';

@Component({
  selector: 'app-tabout',
  templateUrl: './tabout.page.html',
  styleUrls: ['./tabout.page.scss'],
})
export class TaboutPage implements OnInit {

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
