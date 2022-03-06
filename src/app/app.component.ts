import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
  headlines = [
    'Hi, I am Valentina',
    'frontend developer with angular experience',
    'and I am eager to show you my projects'
  ];
  currentImage = 0;
  showImage = true;

  ngOnInit() {
    this.updateImage();
  }


  updateImage() {

    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;   //Rest 0, beginnt wieder bei 0
      this.showImage = false;

      setTimeout(() => {
        this.showImage = true;
      }, 10);
    }, 8000);

  }




}
