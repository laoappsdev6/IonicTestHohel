import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-booking-detail',
  templateUrl: './booking-detail.page.html',
  styleUrls: ['./booking-detail.page.scss'],
})
export class BookingDetailPage implements OnInit {

  public status: string;

  constructor(
    private route: ActivatedRoute,
    public toastController: ToastController
  ) { }

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.status = params.status;
    });
  }

  async alertConfrim() {
    const toast = await this.toastController.create({
      message: 'ຢືນຢັນການຈອງ ສຳເລັດ.',
      duration: 1000,
      position: 'bottom',
      cssClass: 'alertConfirm'
      // color: 'success',
    });
    toast.present();
  }
  async alertReceives() {
    const toast = await this.toastController.create({
      message: 'ຢືນຢັນການຮັບເງິນ ສຳເລັດ.',
      duration: 1000,
      position: 'bottom',
      cssClass: 'alertConfirm'

      // color: 'success',
    });
    toast.present();
  }
}
