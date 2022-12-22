import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-crop-cropvar',
  templateUrl: './crop-cropvar.page.html',
  styleUrls: ['./crop-cropvar.page.scss'],
})
export class CropCropvarPage implements OnInit {

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
