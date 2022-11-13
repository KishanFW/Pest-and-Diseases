import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-prevent',
  templateUrl: './prevent.page.html',
  styleUrls: ['./prevent.page.scss'],
})
export class PreventPage implements OnInit {

  constructor() { }

  @ViewChild('popover') popover;

  isOpen = false;

  private presentPopover(e: Event) {
    this.popover.event = e;
    this.isOpen = true;
  }

  ngOnInit() {
  }

}
