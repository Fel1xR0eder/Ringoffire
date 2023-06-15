import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.scss']
})
export class EditPlayerComponent {

  allProfilePictures = ['bee.png', 'elephant.png', 'fish.png', 'lamb.png', 'penguin.png', 'profile_image.png', 'rat.png', 'rattlesnake.png'];

  constructor(public dialogRef: MatDialogRef<EditPlayerComponent>) { }

  onNoClick() {
    this.dialogRef.close();
  }
}
