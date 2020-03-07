import { Marker } from './marker.model';

export interface Destination {
    key: string;
    name: string;
    location: google.maps.LatLng;
    zoom: number;
    slogan?: string;
    spots?: Spot[];
    picture?: string;
    destinations?: Destination[];
}

export interface Spot {
    name: string;
    picture: string;
    marker: Marker;
}
