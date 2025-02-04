import { Component, OnInit } from '@angular/core';

import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  async ngOnInit() {
    await this.photoService.loadSaved();
  }

  constructor(public photoService: PhotoService) { }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }
}