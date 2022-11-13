import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sread',
  templateUrl: './sread.page.html',
  styleUrls: ['./sread.page.scss'],
})
export class SreadPage implements OnInit {

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
