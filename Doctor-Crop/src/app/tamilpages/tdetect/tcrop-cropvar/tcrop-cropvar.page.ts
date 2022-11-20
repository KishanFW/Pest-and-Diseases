import { Component, OnInit, ViewChild
} from '@angular/core';

@Component({
  selector: 'app-tcrop-cropvar',
  templateUrl: './tcrop-cropvar.page.html',
  styleUrls: ['./tcrop-cropvar.page.scss'],
})
export class TcropCropvarPage implements OnInit {

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
