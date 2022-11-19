import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-spest',
  templateUrl: './spest.page.html',
  styleUrls: ['./spest.page.scss'],
})
export class SpestPage implements OnInit {

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
