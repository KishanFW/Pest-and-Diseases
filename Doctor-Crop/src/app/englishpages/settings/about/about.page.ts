import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  language: string = this.translateService.currentLang; // 2
  constructor(private translateService: TranslateService) {} //3
  languageChange() {  // add this
    this.translateService.use(this.language);  // add this
  }  // add this



  ngOnInit() {
  }

  @ViewChild('popover') popover;

  isOpen = false;

  presentPopover(e: Event) {
    this.popover.event = e;
    this.isOpen = true;
  }

}
