import { Injectable } from '@angular/core';

import { Headers, Http } from '@angular/http';

import { ImagePuzzle } from './image-puzzle';

import 'rxjs/add/operator/toPromise';

@Injectable()

export class ImageDataService {
    private imageUrl = 'api/images';
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) {
    }

    getAllImage(): Promise<ImagePuzzle[]> {
        return this.http.get(this.imageUrl)
            .toPromise()
            .then(response => response.json().data as ImagePuzzle[]);
    }
    getImageById(id: number): Promise<ImagePuzzle> {
        const url = `${this.imageUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as ImagePuzzle);
    }


}
