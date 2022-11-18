import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-diseases',
  templateUrl: './diseases.page.html',
  styleUrls: ['./diseases.page.scss'],
})
export class DiseasesPage implements OnInit {

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
