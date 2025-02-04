import { Component } from '@angular/core';
import { PhotoService, UserPhoto } from '../services/photo.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  constructor(public photoService: PhotoService) {}

  deletePhoto(photo: UserPhoto, position: number) {
    this.photoService.deletePhoto(photo, position);
  }
}
