import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-appsettings',
  templateUrl: './appsettings.page.html',
  styleUrls: ['./appsettings.page.scss'],
})
export class AppsettingsPage implements OnInit {

  language: string = this.translateService.currentLang; // 2
  constructor(private translateService: TranslateService) {} //3
  languageChange() {  // add this
    this.translateService.use(this.language);  // add this
  }  // add this



  ngOnInit() {
  }

  @ViewChild('popover') popover;

  isOpen = false;
  isOpen2 = false;


  private presentPopover(e: Event) {
    this.popover.event = e;
    this.isOpen = true;
  }

  private presentPopover2(e: Event) {
    this.popover.event = e;
    this.isOpen2 = true;
  }
}
