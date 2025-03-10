import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import * as L from 'leaflet';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-store-locator',
  templateUrl: './store-locator.component.html',
  styleUrls: ['./store-locator.component.scss']
})
export class StoreLocatorComponent implements OnInit, AfterViewInit {

  zipcode: string = '';
  address: string = '';

 
  stores: {
    id: number;
    name: string;
    address: string;
    zip: string;
    lat: number;
    lng: number;
    phone: string;
    hours: string;
    website?: string;
    description?: string;
  }[] = [
    {
      id: 1,
      name: "Store A",
      address: "123 Main St, New York, NY",
      zip: "10001",
      lat: 40.7128,
      lng: -74.0060,
      phone: "123-456-7890",
      hours: "9:00 AM - 5:00 PM",
      website: "http://storea.example.com",
      description: "Main store in New York."
    },
    {
      id: 2,
      name: "Store B",
      address: "456 Market St, San Francisco, CA",
      zip: "94103",
      lat: 37.7749,
      lng: -122.4194,
      phone: "987-654-3210",
      hours: "10:00 AM - 6:00 PM",
      website: "http://storeb.example.com",
      description: "San Francisco branch."
    },
    {
      id: 3,
      name: "Store C",
      address: "789 Sunset Blvd, Los Angeles, CA",
      zip: "90028",
      lat: 34.0522,
      lng: -118.2437,
      phone: "555-555-5555",
      hours: "8:00 AM - 4:00 PM",
      website: "http://storec.example.com",
      description: "Los Angeles branch."
    }
  ];


  filteredStores: any[] = [];

  
  displayedColumns: string[] = ['id', 'name', 'address', 'zip', 'phone', 'hours', 'website', 'description'];
  dataSource = new MatTableDataSource<any>(this.stores);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  // Leaflet Map
  map!: L.Map;
  markers: L.Marker[] = [];

  constructor() { }

  ngOnInit(): void {
    
    this.filteredStores = this.stores;
  }

  ngAfterViewInit(): void {
    
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    
    this.initMap();
    this.loadMarkers();
  }

  
  initMap(): void {
    this.map = L.map('map', {
      center: [37.7749, -122.4194],
      zoom: 4
    });
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);
  }


  loadMarkers(): void {
    this.clearMarkers();
    this.filteredStores.forEach(store => {
      const marker = L.marker([store.lat, store.lng])
        .addTo(this.map)
        .bindPopup(`<strong>${store.name}</strong><br>${store.address}`);
      marker.on('click', () => this.onMarkerClick(store));
      this.markers.push(marker);
    });
  }


  clearMarkers(): void {
    this.markers.forEach(marker => marker.remove());
    this.markers = [];
  }


  searchStores(): void {
    const zipQuery = this.zipcode.trim();
    const addressQuery = this.address.trim().toLowerCase();

    this.filteredStores = this.stores.filter(store => {
      const matchesZip = zipQuery ? store.zip === zipQuery : true;
      const matchesAddress = addressQuery ? store.address.toLowerCase().includes(addressQuery) : true;
      return matchesZip && matchesAddress;
    });

   
    this.dataSource.data = this.filteredStores;

  
    if (this.filteredStores.length > 0) {
      const firstStore = this.filteredStores[0];
      this.map.setView([firstStore.lat, firstStore.lng], 12);
    }
    this.loadMarkers();
  }


  onRowClicked(store: any): void {
    const marker = this.markers.find(m => {
      const latLng = m.getLatLng();
      return latLng.lat === store.lat && latLng.lng === store.lng;
    });
    if (marker) {
      marker.openPopup();
    }
  }

 
  onMarkerClick(store: any): void {
    console.log('Marker clicked:', store);
  }
}
