import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tbrinjal',
  templateUrl: './tbrinjal.page.html',
  styleUrls: ['./tbrinjal.page.scss'],
})
export class TbrinjalPage implements OnInit {

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
