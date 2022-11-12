import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-read',
  templateUrl: './read.page.html',
  styleUrls: ['./read.page.scss'],
})
export class ReadPage implements OnInit {

  ishidden: boolean = true;
  updownicon: String = "caret-down-outline"

  slidedown(){

    if(this.ishidden === true){

      this.ishidden = false;
      this.updownicon = "caret-up-outline"

    }else if(this.ishidden === false){

      this.ishidden = true;
      this.updownicon = "caret-down-outline"

    }

  }

  constructor() { }

  ngOnInit() {
  }

}
