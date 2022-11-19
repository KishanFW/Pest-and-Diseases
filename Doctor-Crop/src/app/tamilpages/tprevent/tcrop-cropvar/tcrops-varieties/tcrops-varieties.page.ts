import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tcrops-varieties',
  templateUrl: './tcrops-varieties.page.html',
  styleUrls: ['./tcrops-varieties.page.scss'],
})
export class TcropsVarietiesPage implements OnInit {

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
