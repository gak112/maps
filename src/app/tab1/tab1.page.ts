import { Component, ElementRef, ViewChild } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  @ViewChild('map') mapRef: ElementRef<HTMLElement>;
  newMap: GoogleMap;

  ionViewDidEnter() {

    this.createMap();
   // this.getGeoPoints();
  }

  center = {
    lat: 16.866186464468438,
    lng: 79.57450574460671
  }

  constructor() {}

  async createMap() {

    try {
      this.newMap = await GoogleMap.create({
        id: 'capacitor-google-maps',
        element: this.mapRef.nativeElement,
        apiKey:'AIzaSyADxUOzGHPareBBxxD8Ye_8fVyiNp3YxLM',
        config: {
          center: this.center,
          zoom: 13,
        },
        forceCreate: true
      });

      await this.newMap.enableTrafficLayer(true);

      // if(this.newMap) {
      //   this.setCamera();
      // //  this.addMarker();
      //   this.addHotelMarker();
      //   this.addUserMarker();
      // }
    } catch(ex) {
      console.log(ex);
    }

  }


}
