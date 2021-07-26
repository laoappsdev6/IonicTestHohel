import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Leaflet from 'leaflet';
import { antPath } from 'leaflet-ant-path';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  map: Leaflet.Map;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() { }

  goToLogOut() {
    this.router.navigate(['/login']);
  }
  ionViewDidEnter() {
    this.leafletMap();
  }


  leafletMap() {
    this.map = new Leaflet.Map('myMap').setView([12.972442, 77.594563], 13);

    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);


    const greenIcon = Leaflet.icon({
      iconUrl: '../../assets/map/marker-icon.png',
      shadowUrl: '../../assets/map/marker-shadow.png',

      iconSize: [25, 40], // size of the icon
      shadowSize: [45, 80], // size of the shadow
      iconAnchor: [5, 25], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62],  // the same for the shadow
      popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
    });

    Leaflet.marker([17.999501, 102.623686], { icon: greenIcon }).addTo(this.map);
    this.map.setView([17.999501, 102.623686], 13);
    // const markPoint = Leaflet.marker([12.972442, 77.594563]);
    // markPoint.bindPopup('<p>Tashi Delek - Bangalore.</p>');
    // this.map.addLayer(markPoint);
  }

  ionViewWillLeave() {
    this.map.remove();
  }


  logRatingChange(rating) {
    console.log('changed rating:', rating);
    // do your stuff
  }


}
