import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/Camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { ActionSheetController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-update-room',
  templateUrl: './update-room.page.html',
  styleUrls: ['./update-room.page.scss'],
})
export class UpdateRoomPage implements OnInit {

  public myImage: string;
  public haveImage = false;
  croppedImagepath = '';
  isLoading = false;

  imagePickerOptions = {
    maximumImagesCount: 1,
    quality: 50
  };

  constructor(
    private router: Router,
    private camera: Camera,
    public actionSheetController: ActionSheetController,
    private file: File,
    public toastController: ToastController

  ) { }

  ngOnInit() {
  }

  comeBack() {
    this.router.navigate(['/tabs/tab2']);
  }

  pickImage(sourceType) {
    const options: CameraOptions = {
      quality: 100,
      sourceType,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.haveImage = true;
      this.myImage = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });
  }

  async selectImage() {
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'myHead',
      header: 'ເລືອກ ແຫຼ່ງທີ່ມາ ຂອງຮູບ',
      animated: true,
      buttons: [{
        cssClass: 'myImage',
        icon: 'image',
        text: 'ຄັງຮູບ',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      },
      {
        cssClass: 'myCamera',
        text: 'ກ້ອງຖ່າຍຮູບ',
        icon: 'camera',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.CAMERA);
        }
      },
      {
        cssClass: 'myCancel',
        text: 'ຍົກລີກ',
        role: 'cancel'
      }
      ]
    });
    await actionSheet.present();
  }

  async alertSuccess() {
    const toast = await this.toastController.create({
      message: ' ແກ້ໄຂຂໍ້ມູນຫ້ອງ ສຳເລັດ.',
      duration: 1000,
      position: 'top',
      cssClass: 'Success'
    });
    toast.present();

  }
}
