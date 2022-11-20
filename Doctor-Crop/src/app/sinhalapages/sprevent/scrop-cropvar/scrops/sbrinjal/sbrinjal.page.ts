import { Component, OnInit, ViewChild  } from '@angular/core';

@Component({
  selector: 'app-sbrinjal',
  templateUrl: './sbrinjal.page.html',
  styleUrls: ['./sbrinjal.page.scss'],
})
export class SbrinjalPage implements OnInit {

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
