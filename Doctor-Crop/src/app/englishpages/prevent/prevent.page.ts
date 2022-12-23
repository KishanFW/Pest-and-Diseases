import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-prevent',
  templateUrl: './prevent.page.html',
  styleUrls: ['./prevent.page.scss'],
})
export class PreventPage implements OnInit {

  language: string = this.translateService.currentLang; // 2
  constructor(private translateService: TranslateService) {} //3
  languageChange() {  // add this
    this.translateService.use(this.language);  // add this
  }  // add this


  @ViewChild('popover') popover;

  isOpen = false;

  private presentPopover(e: Event) {
    this.popover.event = e;
    this.isOpen = true;
  }

  ngOnInit() {
  }

}
