import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tpest',
  templateUrl: './tpest.page.html',
  styleUrls: ['./tpest.page.scss'],
})
export class TpestPage implements OnInit {

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
