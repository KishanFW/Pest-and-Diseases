import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pests_diseases',
  templateUrl: './pests_diseases.page.html',
  styleUrls: ['./pests_diseases.page.scss'],
})
export class pests_diseasesPage implements OnInit {

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
