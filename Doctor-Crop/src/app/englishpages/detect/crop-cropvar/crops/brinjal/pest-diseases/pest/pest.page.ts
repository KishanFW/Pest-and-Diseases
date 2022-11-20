import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pest',
  templateUrl: './pest.page.html',
  styleUrls: ['./pest.page.scss'],
})
export class PestPage implements OnInit {

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
