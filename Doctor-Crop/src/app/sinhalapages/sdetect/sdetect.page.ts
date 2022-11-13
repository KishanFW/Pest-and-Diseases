import { Component, OnInit, ViewChild } from '@angular/core';



@Component({
  selector: 'app-sdetect',
  templateUrl: './sdetect.page.html',
  styleUrls: ['./sdetect.page.scss'],
})
export class SdetectPage implements OnInit {

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
