import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sdiseases',
  templateUrl: './sdiseases.page.html',
  styleUrls: ['./sdiseases.page.scss'],
})
export class SdiseasesPage implements OnInit {

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
