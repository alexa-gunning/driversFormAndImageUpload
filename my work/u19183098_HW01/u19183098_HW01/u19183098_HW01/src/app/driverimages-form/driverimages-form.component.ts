import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Image } from '../image/image';
import { ImageModule } from '../image/image.module';

@Component({
  selector: 'app-driverimages-form',
  templateUrl: './driverimages-form.component.html',
  styleUrls: ['./driverimages-form.component.css']
})

export class DriverimagesFormComponent implements OnInit {
  img: Image[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  Images(event: any) {

    if (event.target.files.length <= 2) {

      if (event.target.files.length == 1 && this.img.length == 2) {
        var imgadded = event.target.files[0];
        let imgrecent = this.img.sort((a, b) => a.now! - b.now!)[0];
        let Index = this.img.findIndex(img => img.now == imgrecent.now);
        console.log(Index);
        this.img.splice(Index, 1);
        this.addFile(imgadded);
      }

      else if (event.target.files.length == 2 && this.img.length == 2) {
        this.img = [];

        for (var i = 0; i < event.target.files.length; i++) {
          console.log(i);
          var image = event.target.files[i];
          this.addFile(image)
        }

      }

      else {

        for (var i = 0; i < event.target.files.length; i++) {
          var image = event.target.files[i];
          this.addFile(image)
        }

      }

    }

    else {
      alert("You Can only upload a maximum of 2 files")
    }

  }

  addFile(image: any) {
    var reader = new FileReader();
    reader.readAsDataURL(image);

    reader.onload = (imageFound: any) => {
      var imgadded = new Image();
      imgadded.date = new Date().toUTCString();
      imgadded.name = image.name;
      imgadded.location = imageFound.target.result;
      imgadded.now = Date.now();
      this.img.push(imgadded);
    }

  }
}


