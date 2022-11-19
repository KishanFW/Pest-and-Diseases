import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tcrops',
  templateUrl: './tcrops.page.html',
  styleUrls: ['./tcrops.page.scss'],
})
export class TcropsPage implements OnInit {

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
