import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tdiseases',
  templateUrl: './tdiseases.page.html',
  styleUrls: ['./tdiseases.page.scss'],
})
export class TdiseasesPage implements OnInit {

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
