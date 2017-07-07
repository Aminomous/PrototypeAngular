import { Component, OnInit } from '@angular/core';
import { ImagePuzzle } from '../../image-puzzle';
import { ImageDataService } from '../../image-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'pic-selector',
  templateUrl: './pic-selector.component.html',
  styleUrls: ['./pic-selector.component.css']
})
export class PicSelectorComponent implements OnInit {
  puzzlePieceCounter = 0;
  images: ImagePuzzle[];
  selectedImage: ImagePuzzle;
  constructor(private imageDataService: ImageDataService, private router: Router) { }

  ngOnInit() {
    this.getAllImage();
  }

  getAllImage() {
    this.imageDataService.getAllImage().then(response => this.images = response);
  }

  selectImage(img: ImagePuzzle) {
    this.router.navigate(['/gameWindow', {outlets: {workPlace: [img.id]}}]);
    window.location.reload();
  }

}
