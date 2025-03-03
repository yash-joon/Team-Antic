import { Component, OnInit } from '@angular/core';

declare var google: any; 

@Component({
  selector: 'app-store-locator',
  templateUrl: './store-locator.component.html',
  styleUrls: ['./store-locator.component.scss']
})
export class StoreLocatorComponent implements OnInit {
  zipcode: string = '';
  address: string = '';
  stores = [
    { name: "Store A", address: "123 Main St, NY", zip: "10001", lat: 40.7128, lng: -74.0060 },
    { name: "Store B", address: "456 Market St, CA", zip: "94103", lat: 37.7749, lng: -122.4194 },
    { name: "Store C", address: "789 Sunset Blvd, LA", zip: "90028", lat: 34.0522, lng: -118.2437 }
  ];
  map: any;
  markers: any[] = [];

  ngOnInit(): void {
    this.loadGoogleMapsAPI();
  }


  loadGoogleMapsAPI(): void {
    if (typeof google !== 'undefined' && google.maps) {
      this.initMap();
    } else {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBfnhqRKEFx2_3aA26vA4FiFx0Q_eRJaWY`;
      script.defer = true;
      script.async = true;
      document.head.appendChild(script);
      script.onload = () => this.initMap();
    }
  }

  initMap(): void {
    this.map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
      center: { lat: 37.7749, lng: -122.4194 },
      zoom: 4
    });
    this.loadStores();
  }

  loadStores(): void {
    this.clearMarkers();
    this.stores.forEach(store => {
      const marker = new google.maps.Marker({
        position: { lat: store.lat, lng: store.lng },
        map: this.map,
        title: store.name
      });
      this.markers.push(marker);
    });
  }

  searchStores(): void {
    let filteredStores = this.stores;
    if (this.zipcode) {
      filteredStores = filteredStores.filter(store => store.zip === this.zipcode);
    }
    if (filteredStores.length > 0) {
      this.map.setCenter({ lat: filteredStores[0].lat, lng: filteredStores[0].lng });
      this.map.setZoom(12);
    }
    this.loadStores();
  }

  clearMarkers(): void {
    this.markers.forEach(marker => marker.setMap(null));
    this.markers = [];
  }
}

