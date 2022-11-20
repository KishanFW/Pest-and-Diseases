import { Component, OnInit, ViewChild  } from '@angular/core';

@Component({
  selector: 'app-scrops-varieties',
  templateUrl: './scrops-varieties.page.html',
  styleUrls: ['./scrops-varieties.page.scss'],
})
export class ScropsVarietiesPage implements OnInit {

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
