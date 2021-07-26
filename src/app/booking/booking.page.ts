import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {

  constructor(
    private route: Router,
  ) { }

  ngOnInit() {
  }

  goToDetailConfirm() {
    this.route.navigate(['/booking-detail'], { queryParams: { status: 'confirm' } });
  }
  goToDetailReceive() {
    this.route.navigate(['/booking-detail'], { queryParams: { status: 'receive' } });
  }
  goToDetailSuccess() {
    this.route.navigate(['/booking-detail'], { queryParams: { status: 'success' } });
  }
}
