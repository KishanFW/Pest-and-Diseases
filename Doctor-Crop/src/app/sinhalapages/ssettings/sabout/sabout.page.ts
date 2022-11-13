import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sabout',
  templateUrl: './sabout.page.html',
  styleUrls: ['./sabout.page.scss'],
})
export class SaboutPage implements OnInit {

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
