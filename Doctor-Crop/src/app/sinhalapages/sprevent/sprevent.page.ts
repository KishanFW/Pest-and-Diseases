import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sprevent',
  templateUrl: './sprevent.page.html',
  styleUrls: ['./sprevent.page.scss'],
})
export class SpreventPage implements OnInit {

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
