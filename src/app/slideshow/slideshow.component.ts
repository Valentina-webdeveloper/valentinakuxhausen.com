import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  // images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
  // headlines = [
  //   "Hi, I'm Valentina",
  //   "front-end developer based in Germany"
  // ];
  // currentImage = 0;
  // showImage = true;

  // ngOnInit() {
  //   this.updateImage();
  // }


  // updateImage() {

  //   setInterval(() => {
  //     this.currentImage++;
  //     this.currentImage = this.currentImage % this.images.length;   //Rest 0, beginnt wieder bei 0
  //     this.showImage = false;

  //     setTimeout(() => {
  //       this.showImage = true;
  //     }, 10);
  //   }, 8000);

  // }

  
}
