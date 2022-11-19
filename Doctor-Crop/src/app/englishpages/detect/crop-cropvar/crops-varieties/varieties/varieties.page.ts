import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-varieties',
  templateUrl: './varieties.page.html',
  styleUrls: ['./varieties.page.scss'],
})
export class VarietiesPage implements OnInit {

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
