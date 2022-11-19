import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-thome',
  templateUrl: './thome.page.html',
  styleUrls: ['./thome.page.scss'],
})
export class ThomePage implements OnInit {

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
