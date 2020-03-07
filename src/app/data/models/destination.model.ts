import { Marker } from './marker.model';

export interface Destination {
    name: string;
    location: google.maps.LatLng;
    label: string;
    zoom: number;
    slogan?: string;
}

export interface Spot {
    name: string;
    picture: string;
    marker: Marker;
}
