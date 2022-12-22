import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-detect',
  templateUrl: './detect.page.html',
  styleUrls: ['./detect.page.scss'],
})
export class DetectPage implements OnInit {

  language: string = this.translateService.currentLang; // 2
  constructor(private translateService: TranslateService) {} //3
  languageChange() {  // add this
    this.translateService.use(this.language);  // add this
  }  // add this


  ngOnInit() {
  }

  @ViewChild('popover') popover;

  isOpen = false;

  private presentPopover(e: Event) {
    this.popover.event = e;
    this.isOpen = true;
  }

}
