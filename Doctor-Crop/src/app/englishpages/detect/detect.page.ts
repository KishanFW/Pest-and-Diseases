import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-detect',
  templateUrl: './detect.page.html',
  styleUrls: ['./detect.page.scss'],
})
export class DetectPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ViewChild('popover') popover;

  isOpen = false;

  presentPopover(e: Event) {
    this.popover.event = e;
    this.isOpen = true;
  }

}
