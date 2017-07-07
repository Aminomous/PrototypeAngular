import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';

import { ImagePuzzle } from '../../image-puzzle';
import { ImageDataService } from '../../image-data.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'work-place',
  templateUrl: './work-place.component.html',
  styleUrls: ['./work-place.component.css']
})

export class WorkPlaceComponent implements OnInit {

  selectedImage: ImagePuzzle;
  allId = [];

  constructor(private imageDataService: ImageDataService, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.route.paramMap.
      switchMap((params: Params) => this.imageDataService.getImageById(+params.get('id')))
      .subscribe(response => this.selectedImage = response);
  }

  onClick(id: string) {
    document.getElementById(id).style.opacity = '0';
  }
  answerCheck(ans: string) {
    if (ans.toUpperCase === this.selectedImage.imgName.toUpperCase) {
      window.alert('Correct');
    } else {
      window.alert('Wrong');
    }
  }

}
