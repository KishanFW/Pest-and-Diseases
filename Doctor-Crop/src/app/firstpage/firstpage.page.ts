import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.page.html',
  styleUrls: ['./firstpage.page.scss'],
})
export class FirstpagePage implements OnInit {
  language: string = this.translateService.currentLang;

  constructor(private translateService: TranslateService) { }

  ngOnInit() {}


  languageChange() {  // add this
    this.translateService.use(this.language);  // add this
  }  // add this

  @ViewChild('popover') popover;

  isOpen = false;

  presentPopover(e: Event) {
    this.popover.event = e;
    this.isOpen = true;
  }
}
