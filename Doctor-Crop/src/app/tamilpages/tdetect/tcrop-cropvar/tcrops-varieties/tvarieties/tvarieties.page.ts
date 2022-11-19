import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tvarieties',
  templateUrl: './tvarieties.page.html',
  styleUrls: ['./tvarieties.page.scss'],
})
export class TvarietiesPage implements OnInit {

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
