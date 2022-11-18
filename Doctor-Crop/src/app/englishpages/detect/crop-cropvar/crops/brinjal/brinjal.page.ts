import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-brinjal',
  templateUrl: './brinjal.page.html',
  styleUrls: ['./brinjal.page.scss'],
})
export class BrinjalPage implements OnInit {

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
