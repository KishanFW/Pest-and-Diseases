import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tprevent',
  templateUrl: './tprevent.page.html',
  styleUrls: ['./tprevent.page.scss'],
})
export class TpreventPage implements OnInit {

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
