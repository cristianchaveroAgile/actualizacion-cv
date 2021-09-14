import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {

  info: any;

  constructor() {
    this.info = JSON.parse(localStorage.getItem('info'));
  }

  ngOnInit(): void {
    console.log(this.info)
  }

}
