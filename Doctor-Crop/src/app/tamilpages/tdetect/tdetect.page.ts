import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tdetect',
  templateUrl: './tdetect.page.html',
  styleUrls: ['./tdetect.page.scss'],
})
export class TdetectPage implements OnInit {

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
