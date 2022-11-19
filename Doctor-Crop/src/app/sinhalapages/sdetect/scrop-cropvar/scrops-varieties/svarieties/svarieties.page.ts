import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-svarieties',
  templateUrl: './svarieties.page.html',
  styleUrls: ['./svarieties.page.scss'],
})
export class SvarietiesPage implements OnInit {

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
