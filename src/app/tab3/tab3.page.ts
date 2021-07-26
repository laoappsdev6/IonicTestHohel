import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(
    private router: Router,
    public toastController: ToastController
  ) { }

  goToLogOut() {
    this.router.navigate(['/login']);
  }

  goToUpdate() {
    this.router.navigate(['update-profile']);
  }

}
